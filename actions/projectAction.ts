"use server";
import { prisma } from "@/prisma/db"; // Assuming you're using Prisma for DB

import { auth } from "@/auth"; // Assuming you're using an auth utility
import { Project } from "@/types/global";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
// Server function to handle project creation
export async function createProjectAction(data: Project) {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("User not authenticated");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const project = await prisma.project.create({
    data: {
      ...data,
      userId: user.id,
    },
  });
  redirect(`/dashboard`);
  return project;
}

export async function fetchProject(projectId: string) {
  const data = await prisma.project.findUnique({
    where: { id: projectId },
  });
  return data;
}
// Server function to handle project update
export async function updateProjectAction(
  projectId: string,
  data: Omit<Project, "id">
) {
  const updatedProject = await prisma.project.update({
    where: { id: projectId },
    data,
  });

  redirect(`/dashboard`); // Redirect to the updated project page after update
  return updatedProject;
}

export async function deleteProjectAction(id: string) {
  const deletes = await prisma.project.delete({
    where: { id: id },
  });
  revalidatePath("/dashboard");

  return deletes;
}
