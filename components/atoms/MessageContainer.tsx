import { Message } from "@/types/global";
import Link from "next/link";
import React from "react";

const MessageContainer = (props: { messages: Message[] }) => {
  return (
    <section className=" rounded-lg     ">
      {props.messages.map((message) => (
        <div
          key={message.id}
          className=" mb-4 group rounded-lg  bg-secondary p-2"
        >
          <h3 className="text-lg font-semibold">{message.sender}</h3>
          <div>
            <p className="text-gray-500">{message.content}</p>
            <p>{message.timestamp.toString()}</p>
          </div>
          <div className="hidden  group-hover:flex items-center justify-end w-full duration-1000">
            <Link
              className=" bg-white hover:bg-red-600 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default m-1"
              href={""}
            >
              delete
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MessageContainer;
