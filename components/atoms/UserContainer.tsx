import Link from "next/link";
import React from "react";
import Image from "next/image";
import Banner from "@/public/Banner.jpeg";
import { User } from "@/types/global";
import { Button } from "../ui/button";
const UserContainer = (props: { User: User }) => {
  return (
    <section className=" rounded-lg mb-4 md:max-w-md  pb-2 w-full h-full  border  ">
      <div className=" overflow-hidden">
        <Image
          src={Banner}
          alt="Profile Background"
          sizes=""
          className="object-cover max-h-60 rounded-t-lg"
        />
      </div>
      <div></div>
      <div className="flex  flex-col items-center -mt-16 lg:-mt-20 ">
        <div className="">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 ">
            <Image
              src={
                props.User.image ||
                "https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
              }
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="  text-3xl font-bold ">{props.User.name}</h2>
          <p className="  text-2xl  text-center">{props.User.role}</p>
          <p>{props.User.email}</p>
          <Link
            className=" underline  text-secondary-foreground"
            href={`${props.User.website}`}
          >
            {props.User.website}
          </Link>
          <p className="line-clamp-2 m-2">{props.User.bio}</p>
        </div>
        <div className="flex gap-1">
          <Button asChild>
            <Link href={"/profile"}>Edit Profile</Link>
          </Button>
          <Button asChild>
            <Link href={`/portfolio/${props.User.id}`}>view portfolio</Link>
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div>
          <svg
            className="w-12 h-12 p-2.5 bg-blue-400 bg-opacity-20 rounded-full text-blue-600 border border-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
        </div>
        <div className="flex p-2 flex-col">
          <div className="flex items-end">
            <span className="text-2xl 2xl:text-3xl font-bold">
              {props.User.Viewers}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserContainer;
