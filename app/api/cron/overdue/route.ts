import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmailNotification, sendPushNotification } from "@/lib/notifications";
import { AssetStatus } from "@/generated/client";

// Mark as dynamic to avoid static caching since it depends on time
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    // 1. Find Overdue Assets
    // Return Date < Now AND Status is IN_USE
    const now = new Date();

    // We only care about assets that are overdue and currently checked out
    const overdueAssets = await prisma.asset.findMany({
      where: {
        status: AssetStatus.IN_USE,
        returnDate: {
          lt: now,
        },
      },
      include: {
        transactions: {
          where: { action: "CHECK_OUT" },
          orderBy: { date: "desc" },
          take: 1,
          include: {
            user: true, // Get the holder details
          },
        },
      },
    });

    console.log(`[Cron] Found ${overdueAssets.length} overdue assets.`);

    const results = [];

    for (const asset of overdueAssets) {
      // Should have a holder from the last CHECK_OUT transaction
      const transaction = asset.transactions[0];
      if (!transaction || !transaction.user) {
        console.warn(`[Cron] Asset ${asset.code} is status IN_USE but has no valid CHECK_OUT transaction/user.`);
        continue;
      }

      const user = transaction.user;

      // 2. Check if we already notified this user about this asset TODAY
      // We want to limit spam to once per day per asset
      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const existingLog = await prisma.notificationLog.findFirst({
        where: {
          assetId: asset.id,
          userId: user.id,
          sentAt: {
            gte: startOfDay,
            lte: endOfDay,
          },
        },
      });

      if (existingLog) {
        console.log(`[Cron] Already notified ${user.email} about ${asset.code} today. Skipping.`);
        continue;
      }

      // 3. Send Notifications
      const message = `Asset [${asset.code}] ${asset.name} is overdue. Please return it immediately.`;

      // EMAIL
      const emailSuccess = await sendEmailNotification({
        to: user.email,
        subject: "Overdue Asset Warning",
        html: `
          <h1>Overdue Asset Warning</h1>
          <p>Dear ${user.firstName},</p>
          <p>The following asset is overdue:</p>
          <ul>
            <li><strong>Asset:</strong> [${asset.code}] ${asset.name}</li>
            <li><strong>Due Date:</strong> ${asset.returnDate?.toLocaleDateString()}</li>
          </ul>
          <p>Please return it to the admin office as soon as possible.</p>
        `,
      });

      // PUSH (Mock)
      const pushSuccess = await sendPushNotification({
        token: user.fcmToken,
        title: "Overdue Asset",
        body: message,
      });

      // 4. Log Result
      // We log one entry, prioritized by Email success (usually critical)
      await prisma.notificationLog.create({
        data: {
          type: "EMAIL+PUSH",
          status: emailSuccess || pushSuccess ? "SUCCESS" : "FAILED",
          message: message,
          userId: user.id,
          assetId: asset.id,
        }
      });

      results.push({
        asset: asset.code,
        user: user.email,
        status: emailSuccess ? "Email Sent" : "Email Failed",
      });
    }

    return NextResponse.json({ success: true, processed: results.length, details: results });
  } catch (error) {
    console.error("[Cron] Failed to process overdue assets:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
