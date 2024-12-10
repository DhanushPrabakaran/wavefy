"use server";

import { prisma } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function deleteMessageAction(id: string) {
  const deletes = await prisma.message.delete({
    where: { id: id },
  });
  revalidatePath("/dashboard");

  return deletes;
}
