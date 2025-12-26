"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function getNotificationLogs() {
  const session = await auth();

  if (session?.user?.role !== "ADMIN") {
    return { success: false, error: "Unauthorized" };
  }

  try {
    const logs = await prisma.notificationLog.findMany({
      orderBy: {
        sentAt: "desc",
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        asset: {
          select: {
            code: true,
            name: true,
          },
        },
      },
      take: 100, // Limit to recent 100 for now
    });

    return { success: true, data: logs };
  } catch (error) {
    console.error("Failed to fetch notification logs:", error);
    return { success: false, error: "Failed to fetch logs" };
  }
}

export async function saveFcmToken(token: string, deviceInfo?: string) {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, error: "Unauthorized" };
  }

  try {
    await prisma.user.update({
      where: { id: parseInt(session.user.id) },
      data: {
        fcmToken: token,
        fcmSubscribedAt: new Date(),
        fcmDeviceInfo: deviceInfo || null,
      },
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to save FCM token:", error);
    return { success: false, error: "Failed to save token" };
  }
}

export async function getUserNotifications() {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, error: "Unauthorized" };
  }

  try {
    const logs = await prisma.notificationLog.findMany({
      where: {
        userId: parseInt(session.user.id),
      },
      orderBy: {
        sentAt: "desc",
      },
      take: 10,
      include: {
        asset: {
          select: {
            code: true,
            name: true,
          },
        },
      },
    });

    return { success: true, data: logs };
  } catch (error) {
    console.error("Failed to fetch user notifications:", error);
    return { success: false, error: "Failed to fetch notifications" };
  }
}
