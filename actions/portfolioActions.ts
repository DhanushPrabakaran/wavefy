"use server";
import { prisma } from "@/prisma/db";
export async function fetchProfileAction(id: string) {
  const profile = await prisma.user.findUnique({
    where: { id },
    include: {
      Project: true,
      Experience: true,
      Message: true,
    },
  });

  if (!profile) throw new Error("Profile not found");
  return profile;
}
