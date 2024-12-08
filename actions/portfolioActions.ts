"use server";
import { prisma } from "@/prisma/db";
import { Message } from "@/types/global";
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
export async function createMessageAction(
  id: string,
  data: Omit<Message, "id" | "userId" | "createdAt" | "updatedAt" | "timestamp">
) {
  const Message = await prisma.message.create({
    data: {
      ...data,
      userId: id,
    },
  });
  return Message;
}
