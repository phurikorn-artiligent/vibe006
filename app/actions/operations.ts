"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { AssetStatus, TransactionAction } from "@prisma/client";

const checkOutSchema = z.object({
  assetId: z.number().min(1, "Asset is required"),
  employeeId: z.number().min(1, "Employee is required"),
  notes: z.string().optional(),
  date: z.date().default(() => new Date()),
});

export async function checkOutAsset(data: z.infer<typeof checkOutSchema>) {
  const result = checkOutSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: result.error.issues[0]?.message || "Validation failed" };
  }

  const { assetId, employeeId, notes, date } = result.data;

  try {
    // 1. Verify Asset is AVAILABLE
    const asset = await prisma.asset.findUnique({
      where: { id: assetId },
    });

    if (!asset) {
      return { success: false, error: "Asset not found" };
    }

    if (asset.status !== AssetStatus.AVAILABLE) {
      return { success: false, error: `Asset is currently ${asset.status}, cannot check out.` };
    }

    // 2. Perform Transaction: Create Record + Update Asset Status
    await prisma.$transaction([
      prisma.transaction.create({
        data: {
          action: TransactionAction.CHECK_OUT,
          assetId,
          employeeId,
          date,
          notes,
        },
      }),
      prisma.asset.update({
        where: { id: assetId },
        data: { status: AssetStatus.IN_USE },
      }),
    ]);

    revalidatePath("/assets");
    revalidatePath("/operations/check-out");
    return { success: true };
  } catch (error) {
    console.error("Failed to check out asset:", error);
    return { success: false, error: "Failed to check out asset" };
  }
}
