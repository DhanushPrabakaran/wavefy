"use server";

import { prisma } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function fetchSelectedTheme(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { ThemeNo: true },
  });

  if (!user) throw new Error("User not found");

  return user.ThemeNo; // Returns the currently selected theme number
}

export async function updateTheme(userId: string, themeNo: number) {
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { ThemeNo: themeNo },
  });
  revalidatePath("/themes");
  return updatedUser.ThemeNo; // Returns the updated theme number
}
