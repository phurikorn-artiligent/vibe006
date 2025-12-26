"use server";

import { prisma } from "@/lib/prisma";

export async function getUsers() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { firstName: "asc" },
      where: { role: "EMPLOYEE" } // Filter for check-out assignment
    });
    return { success: true, data: users };
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return { success: false, error: "Failed to fetch users" };
  }
}
