import { LucideGithub } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const HeroBlock = () => {
  return (
    <div className="flex  items-center  bg-fixed bg-no-repeat bg-cover flex-col text-center  min-h-screen align-middle backdrop-blur-2xl justify-center">
          <div
          className="">
        <h1 className=" overflow-hidden border-b leading-none bg-clip-text bg-fixed bg-no-repeat font-antonsc text-[35vw]">
          WAVEFY
        </h1>

        <div className="flex max-lg:flex-col w-full py-2 gap-3 space-x-2 justify-between align-middle items-center font-mono text-sm">
          <div className="lg:text-justify max-w-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            cupiditate numquam excepturi velit
          </div>
          <div className="text-justify max-w-md flex items-center align-middle content-center space-x-2 ">
            <Button>Follow</Button>
            <Button size={"icon"}>
              <LucideGithub />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
