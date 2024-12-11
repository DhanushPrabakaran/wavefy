"use client";
import { Project } from "@/types/global";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { deleteProjectAction } from "@/actions/projectAction";
import { toast } from "@/hooks/use-toast";

const ProjectContainer = ({ projects }: { projects: Project[] }) => {
  const [projectList, setProjectList] = useState<Project[]>(projects);

  // Function to handle project deletion
  const handleDelete = async (projectId: string) => {
    try {
      await deleteProjectAction(projectId);
      toast({
        title: "Success",
        description: "Project deleted successfully.",
      });
      // Remove the deleted project from the UI
      setProjectList((prev) =>
        prev.filter((project) => project.id !== projectId)
      );
    } catch (error: unknown) {
      toast({
        title: "Error deleting project",
        description:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.",
      });
    }
  };

  return (
    <section className="rounded-lg">
      {projectList.map((project) => (
        <div
          key={project.id}
          className="mb-4 flex  flex-wrap max-w-full rounded-md border"
        >
          <div className="flex items-start flex-col justify-center w-full p-2">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-500 line-clamp-2">{project.description}</p>
            <div className=" items-center justify-end w-full duration-1000">
              {/* Update Button */}
              <Button
                asChild
                size={"sm"}
                className="text-muted-foreground hover:text-foreground"
                variant={"secondary"}
              >
                <Link href={`/project/${project.id}`}>Update</Link>
              </Button>

              {/* Delete Button */}
              <Button
                size={"sm"}
                variant={"destructive"}
                className="m-1"
                onClick={() => handleDelete(project.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      ))}
      {/* Add New Project Link */}
      <Link
        className="p-4 mb-4 align-middle flex items-center justify-center rounded-md border"
        href="/project"
      >
        <Button
          className="text-muted-foreground hover:text-foreground"
          variant={"secondary"}
        >
          Add More
        </Button>
      </Link>
    </section>
  );
};

export default ProjectContainer;
