import { Message } from "@/types/global";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const MessageContainer = (props: { messages: Message[] }) => {
  return (
    <section className=" rounded-lg     ">
      {props.messages.map((message) => (
        <div key={message.id} className=" mb-4 group rounded-lg  border p-2">
          <h3 className="text-lg font-semibold">{message.sender}</h3>
          <div>
            <p className="text-gray-500">{message.content}</p>
            <p>{message.timestamp.toString()}</p>
          </div>
          <div className="hidden  group-hover:flex items-center justify-end w-full duration-1000">
            <Button size={"sm"} variant={"destructive"} className="m-1">
              <Link href={""}>delete</Link>
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MessageContainer;
