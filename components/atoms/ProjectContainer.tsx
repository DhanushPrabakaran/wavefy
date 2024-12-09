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
          className="mb-4 flex group flex-wrap max-w-full rounded-md border"
        >
          <div className="flex items-start flex-col justify-center w-full p-2">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-500 line-clamp-2">{project.description}</p>
            <div className="hidden group-hover:flex items-center justify-end w-full duration-1000">
              {/* Update Button */}
              <Button asChild size={"sm"} variant={"secondary"} className="m-1">
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
        <svg
          className="w-12 h-12 fill-stone-200 rounded-full text-gray-200"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          id="add-new"
        >
          <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"></path>
        </svg>
      </Link>
    </section>
  );
};

export default ProjectContainer;
