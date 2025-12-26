"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { AssetStatus, TransactionAction } from "@/generated/client";

// --- Check Out Action ---

const checkOutSchema = z.object({
  assetId: z.number().min(1, "Asset is required"),
  userId: z.number().min(1, "User is required"),
  notes: z.string().optional(),
  date: z.date().default(() => new Date()),
  returnDate: z.date(),
});

export async function checkOutAsset(data: z.infer<typeof checkOutSchema>) {
  const result = checkOutSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: result.error.issues[0]?.message || "Validation failed" };
  }

  const { assetId, userId, notes, date, returnDate } = result.data;

  // Validate returnDate >= date (Assignment Date)
  // Strip time for comparison to avoid issues with defaults
  const assignmentDateStart = new Date(date);
  assignmentDateStart.setHours(0, 0, 0, 0);
  const returnDateStart = new Date(returnDate);
  returnDateStart.setHours(0, 0, 0, 0);

  if (returnDateStart < assignmentDateStart) {
    return { success: false, error: "Return date cannot be earlier than assignment date" };
  }

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
          userId,
          date,
          notes,
        },
      }),
      prisma.asset.update({
        where: { id: assetId },
        data: {
          status: AssetStatus.IN_USE,
          returnDate: returnDate
        },
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

// --- Check In Action ---

const checkInSchema = z.object({
  assetId: z.number().min(1, "Asset is required"),
  status: z.nativeEnum(AssetStatus),
  notes: z.string().optional(),
  date: z.date().default(() => new Date()),
});

export async function checkInAsset(data: z.infer<typeof checkInSchema>) {
  const result = checkInSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: result.error.issues[0]?.message || "Validation failed" };
  }

  const { assetId, status, notes, date } = result.data;

  try {
    // 1. Verify Asset is IN_USE (or at least not available)
    const asset = await prisma.asset.findUnique({
      where: { id: assetId },
      include: {
        transactions: {
          orderBy: { date: "desc" },
          take: 1,
        },
      },
    });

    if (!asset) {
      return { success: false, error: "Asset not found" };
    }

    if (asset.status === AssetStatus.AVAILABLE) {
      return { success: false, error: `Asset is already AVAILABLE.` };
    }

    // Determine the user from the last transaction (CHECK_OUT)
    const lastTransaction = asset.transactions[0];
    const userId = lastTransaction?.action === TransactionAction.CHECK_OUT
      ? lastTransaction.userId
      : undefined;

    if (!userId) {
      // If we can't find who held it, we try to grab *any* employee or fail. 
      // For robustness, if system state is weird, we might want to allow override.
      // But strict logic says: You can't return what wasn't checked out.
      // Let's allow it but log a warning or use a system placeholder if we had one.
      // For now, return error.
      return { success: false, error: "Could not determine current holder (No CHECK_OUT record)." };
    }

    // 2. Perform Transaction: Create Record + Update Asset Status
    await prisma.$transaction([
      prisma.transaction.create({
        data: {
          action: TransactionAction.CHECK_IN,
          assetId,
          userId, // The user returning it
          date,
          notes,
        },
      }),
      prisma.asset.update({
        where: { id: assetId },
        data: { status },
      }),
    ]);

    revalidatePath("/assets");
    revalidatePath("/operations/check-in");
    return { success: true };
  } catch (error) {
    console.error("Failed to check in asset:", error);
    return { success: false, error: "Failed to check in asset" };
  }
}
