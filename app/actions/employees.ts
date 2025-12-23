"use server";

import { prisma } from "@/lib/prisma";

export async function getEmployees() {
  try {
    const employees = await prisma.employee.findMany({
      orderBy: { firstName: "asc" },
    });
    return { success: true, data: employees };
  } catch (error) {
    console.error("Failed to fetch employees:", error);
    return { success: false, error: "Failed to fetch employees" };
  }
}
