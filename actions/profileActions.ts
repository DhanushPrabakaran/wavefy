"use server";
import { prisma } from "@/prisma/db";
import { z } from "zod";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  bio: z.string().optional(),
  website: z.string().optional(),
  experience: z.number().optional(),
});
export async function fetchProfileAction(email: string) {
  const profile = await prisma.user.findUnique({
    where: { email },
  });

  if (!profile) throw new Error("Profile not found");
  return profile;
}

// Server Action for updating profile data
export async function updateProfileAction(data: z.infer<typeof FormSchema>) {
  // "use server"; // Server action annotation
  const updatedProfile = await prisma.user.upsert({
    where: { email: data.email },
    update: data,
    create: data,
  });
  return updatedProfile;
}
