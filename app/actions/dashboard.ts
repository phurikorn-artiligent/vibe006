"use server";

import { prisma } from "@/lib/prisma";
import { AssetStatus } from "@/generated/client";

export async function getDashboardStats() {
  try {
    const totalPromise = prisma.asset.count();

    // Group by status to get counts efficiently
    const statusCountsPromise = prisma.asset.groupBy({
      by: ["status"],
      _count: {
        status: true,
      },
    });

    const [total, statusCounts] = await Promise.all([
      totalPromise,
      statusCountsPromise,
    ]);

    const stats = {
      total,
      available: 0,
      inUse: 0,
      maintenance: 0,
      retired: 0,
    };

    statusCounts.forEach((group) => {
      switch (group.status) {
        case AssetStatus.AVAILABLE:
          stats.available = group._count.status;
          break;
        case AssetStatus.IN_USE:
          stats.inUse = group._count.status;
          break;
        case AssetStatus.MAINTENANCE:
          stats.maintenance = group._count.status;
          break;
        case AssetStatus.RETIRED:
          stats.retired = group._count.status;
          break;
      }
    });

    return { success: true, data: stats };
  } catch (error) {
    console.error("Failed to fetch dashboard stats:", error);
    return { success: false, error: "Failed to fetch dashboard stats" };
  }
}

export async function getRecentActivity(limit = 5) {
  try {
    const transactions = await prisma.transaction.findMany({
      take: limit,
      orderBy: { date: "desc" },
      include: {
        asset: true,
        user: true,
      },
    });

    return { success: true, data: transactions };
  } catch (error) {
    console.error("Failed to fetch recent activity:", error);
    return { success: false, error: "Failed to fetch recent activity" };
  }
}
