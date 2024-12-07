import Link from "next/link";
import React from "react";
import Image from "next/image";
import Banner from "@/public/Banner.jpeg";
import { User } from "@/types/global";
const UserContainer = (props: { User: User }) => {
  return (
    <section className=" rounded-lg mb-4 md:max-w-md pb-2 w-full h-full  border  ">
      <div className=" overflow-hidden">
        <Image
          src={Banner}
          alt="Profile Background"
          sizes=""
          className="object-cover max-h-60 rounded-t-lg"
        />
      </div>

      <div className="flex flex-col items-center -mt-16 lg:-mt-20 ">
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
        <Link
          href={"/profile"}
          className="bg-black text-white px-4 py-2 rounded-md mt-4"
        >
          Edit Profile
        </Link>
      </div>
    </section>
  );
};

export default UserContainer;
