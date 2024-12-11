"use client";
import { Message } from "@/types/global";
// import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { deleteMessageAction } from "@/actions/messageAction";
import { toast } from "@/hooks/use-toast";

const MessageContainer = ({ messages }: { messages: Message[] }) => {
  const [experiencesList, setexperiencesList] = useState<Message[]>(messages);
  // Function to handle experiences deletion
  const handleDelete = async (experiencesId: string) => {
    try {
      await deleteMessageAction(experiencesId);
      toast({
        title: "Success",
        description: "message deleted successfully.",
      });
      // Remove the deleted experiences from the UI
      setexperiencesList((prev) =>
        prev.filter((experiences) => experiences.id !== experiencesId)
      );
    } catch (error: unknown) {
      toast({
        title: "Error deleting message",
        description:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.",
      });
    }
  };
  return (
    <section className=" rounded-lg     ">
      {experiencesList.map((message) => (
        <div key={message.id} className=" mb-4 group rounded-lg  border p-2">
          <h3 className="text-lg font-semibold">{message.sender}</h3>
          <div>
            <p className="text-gray-500">{message.content}</p>
            <p>{message.timestamp.toString()}</p>
          </div>
          <div className="hidden  group-hover:flex items-center justify-end w-full duration-1000">
            <Button
              size={"sm"}
              variant={"destructive"}
              className="m-1"
              onClick={() => handleDelete(message.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
      <div className="p-4 mb-4 lowercase text-muted-foreground align-middle flex items-center justify-center rounded-md border">
        Nothing More to See more
      </div>
    </section>
  );
};

export default MessageContainer;
