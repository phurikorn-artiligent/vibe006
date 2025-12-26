import nodemailer from "nodemailer";
import admin from "firebase-admin";

export type NotificationType = "EMAIL" | "PUSH";

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
}

interface SendPushParams {
  token: string | null;
  title: string;
  body: string;
}

// Reuse the transporter logic from actions/auth.ts or create a shared singleton
// For simplicity and to avoid circular deps with actions, strict env usage here.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.example.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || "user",
    pass: process.env.SMTP_PASS || "pass",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function sendEmailNotification({ to, subject, html }: SendEmailParams): Promise<boolean> {
  console.log(`[Notification] Attempting to send Email to ${to}`);
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || '"Fixed Asset System" <no-reply@example.com>',
      to,
      subject,
      html,
    });
    console.log(`[Notification] Email sent: ${info.messageId}`);
    return true;
  } catch (error) {
    console.error("[Notification] Email failed:", error);
    return false;
  }
}

export async function sendPushNotification({ token, title, body }: SendPushParams): Promise<boolean> {
  console.log(`[Notification] Attempting to send Push to Token: ${token ? token.substring(0, 10) + "..." : "NULL"}`);

  if (!token) {
    console.warn("[Notification] Push failed: No token provided");
    return false;
  }

  try {
    // Initialize Firebase Admin SDK if not already done
    if (admin.apps.length === 0) {
      const projectId = process.env.FIREBASE_PROJECT_ID;
      const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
      const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

      if (!projectId || !clientEmail || !privateKey) {
        console.error("[Notification] Firebase Admin SDK env vars missing");
        return false;
      }

      admin.initializeApp({
        credential: admin.credential.cert({
          projectId,
          clientEmail,
          privateKey,
        }),
      });
      console.log("[Notification] Firebase Admin SDK initialized");
    }

    const messaging = admin.messaging();

    await messaging.send({
      token: token,
      notification: {
        title,
        body,
      },
      webpush: {
        notification: {
          icon: '/icon.png',
          badge: '/badge.png',
        },
      },
    });

    console.log(`[Notification] Push sent successfully to ${token.substring(0, 10)}...`);
    return true;
  } catch (error: any) {
    console.error("[Notification] Push failed:", error.message || error);
    // Common errors: invalid token, token expired, app not registered
    return false;
  }
}
