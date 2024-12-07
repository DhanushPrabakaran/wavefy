import Link from "next/link";
import React from "react";
import Image from "next/image";
import Banner from "@/public/Banner.jpeg";
import { User } from "@/types/global";
import { Button } from "../ui/button";
const UserContainer = (props: { User: User }) => {
  return (
    <section className=" p-2 rounded-lg mb-4 md:max-w-md  pb-2 w-full h-full  border  ">
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
          <h2 className=" fluid-xl md:text-3xl font-bold ">
            {props.User.name}
          </h2>
          <p className=" fluid-md md:text-base font-semibold text-center">
            {props.User.role +
              " . " +
              props.User.email +
              " . " +
              props.User.website}
          </p>
          <p className="fluid-base text-center md:text-base p-2">
            {props.User.bio}
          </p>
        </div>
        <Button>
          <Link href={"/profile"}>Edit Profile</Link>
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-bold text-sm text-indigo-600">Total Views</span>
        <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
          from start
        </span>
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
        <div className="flex flex-col">
          <div className="flex items-end">
            <span className="text-2xl 2xl:text-3xl font-bold">8,141</span>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex items-center justify-between">
          <span className="font-bold text-sm text-green-600">
            Total Messages
          </span>
          <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
            from start
          </span>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div>
            <svg
              className="w-12 h-12 p-2.5 bg-green-400 bg-opacity-20 rounded-full text-green-600 border border-green-600"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              id="message"
            >
              <g>
                <path d="M24 7H8a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h1v4a1 1 0 0 0 1.61.79L16.77 23H24a3 3 0 0 0 3-3V10a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1h-7.57a1 1 0 0 0-.61.21L11 25v-3a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Z"></path>
                <path d="M11 14h6a1 1 0 0 0 0-2h-6a1 1 0 0 0 0 2zm10 2H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2z"></path>
              </g>
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex items-end">
              <span className="text-2xl 2xl:text-3xl font-bold">217</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-bold text-sm ">views</span>
        <span className=" px-2 py-1 rounded-lg transition duration-200 cursor-default">
          till today
        </span>
      </div>
    </section>
  );
};

export default UserContainer;
