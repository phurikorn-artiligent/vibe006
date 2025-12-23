"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { AssetStatus } from "@prisma/client";

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
