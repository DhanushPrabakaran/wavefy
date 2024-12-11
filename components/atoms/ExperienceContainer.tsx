"use client";
import { Experience } from "@/types/global";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { deleteExperienceAction } from "@/actions/experienceAction";
import { toast } from "@/hooks/use-toast";

const ExperienceContainer = ({
  experiences,
}: {
  experiences: Experience[];
}) => {
  const [experiencesList, setexperiencesList] =
    useState<Experience[]>(experiences);
  // Function to handle experiences deletion
  const handleDelete = async (experiencesId: string) => {
    try {
      await deleteExperienceAction(experiencesId);
      toast({
        title: "Success",
        description: "experiences deleted successfully.",
      });
      // Remove the deleted experiences from the UI
      setexperiencesList((prev) =>
        prev.filter((experiences) => experiences.id !== experiencesId)
      );
    } catch (error: unknown) {
      toast({
        title: "Error deleting experiences",
        description:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.",
      });
    }
  };
  return (
    <section className=" rounded-lg ">
      {experiencesList.length > 0 ? (
        experiencesList.map((experience) => (
          <div
            key={experience.id}
            className="mb-4 flex group flex-wrap max-w-full rounded-md  border p-2"
          >
            <div className=" flex items-start flex-col justify-center w-full p-2">
              <h3 className="text-lg font-semibold">{experience.role}</h3>
              <p className="text-gray-500 line-clamp-2">
                {experience.description +
                  "adjkh iuywleiurylwcity  yiuyi  ryirwy nkuhikeuryciry uiriueyrityriouyoitu oyrowiutyqowuiqy"}
              </p>
              <div className=" items-center justify-end w-full duration-1000">
                <Button
                  asChild
                  size={"sm"}
                  className="text-muted-foreground hover:text-foreground"
                  variant={"secondary"}
                >
                  <Link href={`/experience/${experience.id}`}>Update</Link>
                </Button>

                {/* Delete Button */}
                <Button
                  size={"sm"}
                  variant={"destructive"}
                  className="m-1"
                  onClick={() => handleDelete(experience.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
      <Link
        className="p-4 mb-4 align-middle flex items-center justify-center rounded-md border"
        href={"/experience"}
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

export default ExperienceContainer;
