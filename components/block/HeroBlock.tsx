import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Photo from "@/public/themes/SolarBlackTheme.png";
import Photo1 from "@/public/svg/pen.png";
import Photo2 from "@/public/svg/dream.png";
import Photo3 from "@/public/svg/paper.png";
import Link from "next/link";
const HeroBlock = () => {
  return (
    <div className="min-h-screen py-16 ">
      <div className="">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 items-center text-center">
            <h1 className="mb-8 inline-block text-center items-center justify-center font-antonsc text-pretty max-md:text-[9vw]  text-[6vw] font-medium ">
              Build
              <Image
                src={Photo1}
                alt={""}
                className="fill-orange-600 w-[4vw]  inline"
              />
              your Own
              <span className="text-orange-700 "> Portfolio </span>
              <Image
                src={Photo2}
                alt={""}
                className="fill-orange-600 w-[4vw]  inline"
              />{" "}
              With portfolioforge
              <Image
                src={Photo3}
                alt={""}
                className="fill-orange-600 w-[4vw]  inline"
              />
            </h1>
            <p className="mx-auto max-w-screen-md text-muted-foreground lg:text-xl">
              Craft your professional portfolio effortlessly with Portfolio
              Forge. Showcase your skills, experiences, and projects to stand
              out in your field. With an intuitive dashboard and customizable
              themes, Portfolio Forge makes portfolio creation seamless and
              enjoyable.
            </p>
            <div className="mt-12 flex w-full  justify-center gap-2 sm:flex-row">
              <Button>
                <Link
                  href={"/dashboard"}
                  className=" inline-flex text-center items-center"
                >
                  Get started now
                  <ChevronRight className="ml-2 h-4" />
                </Link>
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
