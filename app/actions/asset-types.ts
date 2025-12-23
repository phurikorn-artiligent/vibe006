"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const assetTypeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});

export type AssetTypeResult = {
  success: boolean;
  error?: string;
};

export async function getAssetTypes() {
  try {
    const types = await prisma.assetType.findMany({
      orderBy: { name: "asc" },
      include: {
        _count: {
          select: { assets: true },
        },
      },
    });
    return { success: true, data: types };
  } catch (error) {
    console.error("Failed to fetch asset types:", error);
    return { success: false, error: "Failed to fetch asset types" };
  }
}

export async function createAssetType(data: z.infer<typeof assetTypeSchema>) {
  const result = assetTypeSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: result.error.issues[0]?.message || "Validation failed" };
  }

  try {
    await prisma.assetType.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
    revalidatePath("/settings/asset-types");
    return { success: true };
  } catch (error: any) {
    if (error.code === "P2002") {
      return { success: false, error: "Asset type with this name already exists" };
    }
    console.error("Failed to create asset type:", error);
    return { success: false, error: "Failed to create asset type" };
  }
}

export async function updateAssetType(id: number, data: z.infer<typeof assetTypeSchema>) {
  const result = assetTypeSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: result.error.issues[0]?.message || "Validation failed" };
  }

  try {
    await prisma.assetType.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
      },
    });
    revalidatePath("/settings/asset-types");
    return { success: true };
  } catch (error: any) {
    if (error.code === "P2002") {
      return { success: false, error: "Asset type with this name already exists" };
    }
    console.error("Failed to update asset type:", error);
    return { success: false, error: "Failed to update asset type" };
  }
}

export async function deleteAssetType(id: number) {
  try {
    // Check for existing assets
    const assetCount = await prisma.asset.count({
      where: { typeId: id },
    });

    if (assetCount > 0) {
      return {
        success: false,
        error: `Cannot delete: ${assetCount} asset(s) are using this type.`,
      };
    }

    await prisma.assetType.delete({
      where: { id },
    });
    revalidatePath("/settings/asset-types");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete asset type:", error);
    return { success: false, error: "Failed to delete asset type" };
  }
}
