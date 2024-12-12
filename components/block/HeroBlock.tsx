import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Photo from "@/public/themes/SolarBlackTheme.png";
const HeroBlock = () => {
  return (
    <div className="overflow-hidden ">
      <div className="">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 items-center text-center">
            <h1 className="mb-8 font-antonsc text-pretty text-4xl font-medium lg:text-8xl">
              Build your Own Portfolio With portfolioforge
            </h1>
            <p className="mx-auto max-w-screen-md text-muted-foreground lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
            <div className="mt-12 flex w-full flex-col justify-center gap-2 sm:flex-row">
              <Button>
                Get started now
                <ChevronRight className="ml-2 h-4" />
              </Button>
              <Button variant="ghost">
                Learn more
                <ChevronRight className="ml-2 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <Image
          src={Photo}
          alt="placeholder"
          width={2000}
          height={2000}
          className="mx-auto mt-24 max-h-[700px] w-full max-w-7xl rounded-t-lg object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroBlock;
