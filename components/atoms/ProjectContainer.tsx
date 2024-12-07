import { Project } from "@/types/global";
import Link from "next/link";
import React from "react";

const ProjectContainer = (props: { projects: Project[] }) => {
  return (
    <section className="  rounded-lg ">
      {props.projects.map((project) => (
        <div
          key={project.id}
          className="mb-4 flex group flex-wrap max-w-full rounded-md  border"
        >
          <div className=" flex items-start flex-col justify-center w-full p-2">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-500 line-clamp-2">
              {project.description +
                "adjkh iuywleiurylwcity  yiuyi  ryirwy nkuhikeuryciry uiriueyrityriouyoitu oyrowiutyqowuiqy"}
            </p>
            <div className="hidden  group-hover:flex items-center justify-end w-full duration-1000">
              <Link
                className="text-xs bg-whitehover:bg-black text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default m-1"
                href={""}
              >
                update
              </Link>
              <button className=" text-xs bg-white hover:bg-red-600 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default m-1">
                delete
              </button>
            </div>
          </div>
        </div>
      ))}
      <Link
        className="p-4  mb-4 align-middle flex items-center justify-center rounded-md border"
        href={"/project"}
      >
        <svg
          className="w-12 h-12  fill-stone-200  rounded-full text-gray-200 "
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
