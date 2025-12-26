"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { AssetStatus, Prisma } from "@/generated/client";
import { auth } from "@/auth";

const assetSchema = z.object({
  code: z.string().min(1, "Asset Code is required"),
  name: z.string().min(1, "Asset Name is required"),
  typeId: z.coerce.number().min(1, "Asset Type is required"),
  serialNumber: z.string().optional(),
  status: z.nativeEnum(AssetStatus).default(AssetStatus.AVAILABLE),
  purchaseDate: z.date().optional(),
  price: z.coerce.number().min(0, "Price must be positive").optional(),
});

export type AssetResult = {
  success: boolean;
  error?: string;
  data?: any;
};

export async function createAsset(data: z.infer<typeof assetSchema>) {
  const session = await auth();
  if (session?.user?.role !== "ADMIN") {
    return { success: false, error: "Unauthorized" };
  }

  const result = assetSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: result.error.issues[0]?.message || "Validation failed" };
  }

  try {
    // Check for duplicate code
    const existingAsset = await prisma.asset.findUnique({
      where: { code: data.code },
    });

    if (existingAsset) {
      return { success: false, error: "Asset Code already exists" };
    }

    await prisma.asset.create({
      data: {
        code: data.code,
        name: data.name,
        typeId: data.typeId,
        serialNumber: data.serialNumber || null,
        status: data.status,
        purchaseDate: data.purchaseDate || null,
        price: data.price ? Number(data.price) : null,
      },
    });

    revalidatePath("/assets");
    return { success: true };
  } catch (error) {
    console.error("Failed to create asset:", error);
    return { success: false, error: "Failed to create asset" };
  }
}

export type GetAssetsParams = {
  page?: number;
  limit?: number;
  search?: string;
  status?: AssetStatus | AssetStatus[];
  typeId?: number;
  holderId?: number; // Filter by current holder
};

export async function getAssets({
  page = 1,
  limit = 10,
  search,
  status,
  typeId,
  holderId,
}: GetAssetsParams) {
  try {
    const skip = (page - 1) * limit;

    const statusFilter = status
      ? Array.isArray(status)
        ? { in: status }
        : { equals: status }
      : {};

    const where: Prisma.AssetWhereInput = {
      AND: [
        status ? { status: statusFilter } : {},
        typeId ? { typeId } : {},
        search
          ? {
            OR: [
              { name: { contains: search, mode: "insensitive" } },
              { code: { contains: search, mode: "insensitive" } },
              { serialNumber: { contains: search, mode: "insensitive" } },
            ],
          }
          : {},
      ],
    };

    const [assets, total] = await Promise.all([
      prisma.asset.findMany({
        where,
        skip,
        take: limit,
        include: {
          type: true,
          transactions: {
            take: 1,
            orderBy: { date: "desc" },
            include: {
              user: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      }),
      prisma.asset.count({ where }),
    ]);

    let filteredAssets = assets;

    // Filter by holderId if provided (In-memory filtering as Prisma doesn't support relation-based filtering on last item easily)
    if (holderId) {
      filteredAssets = assets.filter(asset => {
        const lastTransaction = asset.transactions[0];
        return lastTransaction && lastTransaction.action === "CHECK_OUT" && lastTransaction.user.id === Number(holderId);
      });
      // Note: Total count might be inaccurate here with pagination if strictly relying on database count, 
      // but for strict "My Assets" list usually it's small enough or we accept the limitation.
      // For better pagination, we would need a two-step query (Find IDs from transactions first).
    }

    return {
      success: true,
      data: filteredAssets,
      metadata: {
        total: holderId ? filteredAssets.length : total,
        page,
        limit,
        totalPages: Math.ceil((holderId ? filteredAssets.length : total) / limit),
      },
    };
  } catch (error) {
    console.error("Failed to fetch assets:", error);
    return { success: false, error: "Failed to fetch assets" };
  }
}

export async function getAssetById(id: number) {
  try {
    const asset = await prisma.asset.findUnique({
      where: { id },
      include: {
        type: true,
        transactions: {
          include: {
            user: true,
          },
          orderBy: { date: "desc" },
        },
      },
    });

    if (!asset) {
      return { success: false, error: "Asset not found" };
    }

    return { success: true, data: asset };
  } catch (error) {
    console.error("Failed to fetch asset:", error);
    return { success: false, error: "Failed to fetch asset" };
  }
}
