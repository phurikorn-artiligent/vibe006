"use server";

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export async function logout() {
  await signOut({ redirectTo: '/login' });
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function requestPasswordReset(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // Return success even if user not found to prevent enumeration
      return { success: true };
    }

    // Generate token (Simple random string for MVP)
    const token = crypto.randomUUID();
    const expiry = new Date(Date.now() + 3600 * 1000); // 1 hour

    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetToken: token,
        resetTokenExpiry: expiry,
      },
    });

    // Send Email via SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false // Helps with some self-signed certs in dev
      }
    });

    const resetUrl = `${process.env.AUTH_URL}/reset-password/${token}`;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || '"AssetGuard Support" <noreply@example.com>',
      to: email,
      subject: "Reset your password - AssetGuard",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #4F46E5;">Password Reset Request</h2>
          <p>You requested a password reset for your AssetGuard account.</p>
          <p>Click the button below to set a new password. This link is valid for 1 hour.</p>
          <a href="${resetUrl}" style="background-color: #4F46E5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0;">Reset Password</a>
          <p style="font-size: 12px; color: #666;">If you didn't request this, you can ignore this email.</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Password reset request failed:", error);
    return { success: false, error: "Something went wrong." };
  }
}

export async function resetPassword(token: string, newPassword: string) {
  try {
    // Find user with valid token and expiry
    const user = await prisma.user.findFirst({
      where: {
        resetToken: token,
        resetTokenExpiry: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      return { success: false, error: "Invalid or expired token." };
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Password reset failed:", error);
    return { success: false, error: "Something went wrong." };
  }
}
