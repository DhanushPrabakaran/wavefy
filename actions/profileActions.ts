"use server";
import { prisma } from "@/prisma/db";
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  bio: z.string().optional(),
  website: z.string().optional(),
  experience: z.number().optional(),
});

// Fetch user profile by id
export async function fetchUserProfile(emailId: string) {
  return await prisma.user.findUnique({
    where: { email: emailId },
  });
}

// Update user profile
export async function updateUserProfile(
  emailId: string,
  data: z.infer<typeof profileSchema>
) {
  await prisma.user.update({
    where: { email: emailId },
    data: {
      name: data.name,
      bio: data.bio,
      website: data.website,
      experience: data.experience,
    },
  });
  revalidatePath("/");

  redirect("/dashboard");
}
