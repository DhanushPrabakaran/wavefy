"use client";

import { format, parseISO } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  createMessageAction,
  incrementViewerCount,
} from "@/actions/portfolioActions";
import { toast } from "@/hooks/use-toast";
import { UserProfile } from "@/types/global";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
// import HorizontalScroll2 from "@/components/ui/HorizontalScroll2";

const SolarYellowPortfolioPage = ({ User }: { User: UserProfile }) => {
  useEffect(() => {
    async function updateViewCount() {
      try {
        await incrementViewerCount(User.id);
      } catch (error) {
        console.error("Error incrementing viewer count:", error);
      }
    }

    updateViewCount();
  }, [User.id]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Schema for contact form
  const messageSchema = z.object({
    sender: z.string().min(1, "Name is required"),
    content: z.string().min(1, "Message is required"),
  });

  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      sender: "",
      content: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof messageSchema>) => {
    try {
      await createMessageAction(User.id, data);
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "An error occurred.",
      });
    }
  };

  return (
    <div className="min-h-screen  bg-yellow-300 text-black relative lg:text-lg scroll-smooth  text-center font-mono font-bold">
      {/* Header Section */}
      <section className="flex absolute w-full z-20  top-0 border-bb bg-yellow-300  border-neutral-800  border-opacity-100 border-dashedchange items-center justify-between py-4 px-2 ">
        <div className="flex justify-between items-center space-x-16">
          <h1 className=" ">{User.name}</h1>
        </div>

        <nav className="md:flex hidden lg:flex  font-mono justify-between space-x-5 text-sm">
          <Link className="group" href="#Home">
            <div className="  flex flex-grow   ">Home</div>
          </Link>
          <Link className="group  " href="#About">
            <div className="  flex flex-grow   ">About</div>
          </Link>
          <Link className="group" href="#Project">
            <div className="  flex flex-grow   ">Project</div>
          </Link>
          <Link className="group" href="#Experience">
            <div className="  flex flex-grow   ">Experience</div>
          </Link>
          <Link className="group" href="#Contact">
            <div className="  flex flex-grow   ">Contact</div>
          </Link>
        </nav>

        <div className="flex items-center space-x-2 ">
          <div className="lg:flex hidden space-x-2">
            <Button
              className="bg-yellow-300 border-none"
              size="icon"
              variant={"outline"}
            >
              <Link
                href={User.linkedinLink ? User.linkedinLink : ""}
                className=""
              >
                <LinkedInLogoIcon className="size-5" />
              </Link>
            </Button>
            <Button
              className="bg-yellow-300 border-none"
              size="icon"
              variant={"outline"}
            >
              <Link href={User.gitLink ? User.gitLink : ""} className="">
                <GitHubLogoIcon className="size-5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="  md:hidden pr-2 text-xl font-mono flex flex-grow  group ">
            <Button onClick={toggleMenu} className="   ">
              Menu
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 md:hidden left-0 bg-yellow-300  w-full h-full transform transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="py-4 px-2 h-full flex flex-col items-center">
            <div className="w-full flex justify-between  items-center">
              <div className="flex justify-between items-center space-x-16">
                <h1 className="bg-yellow-300 border-none">{User.name}</h1>
              </div>
              <div className="flex items-center space-x-2 lg:pr-4">
                <div className="   lg:hidden  text-xl font-mono flex flex-grow  group ">
                  <Button onClick={toggleMenu} className="   ">
                    Menu
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full h-full   uppercase ">
              <nav className="text-center flex  flex-col justify-end w-full h-full text-[6vw] space-y-4">
                <Link
                  className="group flex border-b justify-between"
                  href="#Home"
                  onClick={toggleMenu}
                >
                  <h1 className="  flex text-center justify-center items-center group">
                    Home
                  </h1>
                  <h1 className="text-xl">00</h1>
                </Link>
                <Link
                  className="group flex border-b justify-between"
                  href="#About"
                  onClick={toggleMenu}
                >
                  <h1 className="  flex text-center justify-center items-center ">
                    About
                  </h1>
                  <h1 className="text-xl">01</h1>
                </Link>
                <Link
                  className="group flex border-b justify-between"
                  href="#Project"
                  onClick={toggleMenu}
                >
                  <h1 className="flex text-center justify-center items-center">
                    Project
                  </h1>
                  <h1 className="text-xl">02</h1>
                </Link>
                <Link
                  className="group flex border-b justify-between"
                  href="#Experience"
                  onClick={toggleMenu}
                >
                  <h1 className="flex text-center justify-center items-center">
                    Experience
                  </h1>
                  <h1 className="text-xl">03</h1>
                </Link>
                <Link
                  className="group flex border-b justify-between"
                  href="#Contact"
                  onClick={toggleMenu}
                >
                  <h1 className="flex text-center justify-center items-center">
                    Contact
                  </h1>
                  <h1 className="text-xl">04</h1>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section id="Home" className="min-h-screen flex flex-col">
        <div className="bg-yellow-300 flex-1 flex flex-col h-full  justify-center">
          <h1 className=" text-[7vw] font-walkway uppercase p-2">
            {User.name}
          </h1>
        </div>
        <h2>{User.role}</h2>
        <div
          className="bg-[url('/pattern1.jpg')] bg-blue-800 bg-blend-difference bg-contain origin-center bg-no-repeat bg-center flex-1 flex items-center justify-center"
          style={{
            backgroundColor: "#021FB8",
            filter: "invert(1)",
          }}
        >
          {/* <Image src={Photo} alt="" className="w-full h-full object-cover" /> */}
        </div>
      </section>

      {/* About Me Section */}
      <section id="About" className="min-h-screen flex items-center">
        <div className="max-w-6xl  mx-auto px-4">
          <h2 className=" text-3xl lg:text-4xl  font-antonsc font-semibold text-center mb-8">
            About Me
          </h2>
          <p className=" border rounded-sm p-2 max-w-6xl font-walkway text-center">
            {User.bio}
          </p>
        </div>
      </section>
      {/* Project Section */}
      <section
        id="Project"
        className="min-h-screen  flex flex-col  flex-wrap justify-around  "
      >
        <h2 className="text-4xl font-antonsc font-semibold text-center  mb-8">
          Projects
        </h2>
        <HorizontalScroll items={User.Project} />
      </section>
      {/* Experience Section */}
      <section
        id="Experience"
        className="min-h-screen  flex flex-col  flex-wrap justify-around  "
      >
        <h2 className="text-4xl font-antonsc font-semibold text-center  mb-8">
          Experience
        </h2>
        <div className=" text-start w-full self-center place-content-center">
          {User.Experience.length > 0 ? (
            User.Experience.map((experience, index) => (
              <div
                key={index}
                className=" flex  min-h-32 align-middle items-center max-md:flex-col justify-between border-y p-2"
              >
                <h3 className="text-3xl font-semibold font-antonsc w-full max-w-md">
                  {experience.role}
                </h3>
                <p className="w-full max-w-md text-lg ">{experience.company}</p>
                <p className=" w-full text-slate-600 max-w-md">
                  {format(parseISO(experience.start), "PPP")} -{" "}
                  {format(parseISO(experience.end), "PPP")}
                </p>
                {/* <p className=" mt-4 ">{experience.description}</p> */}
              </div>
            ))
          ) : (
            <div className="space-y-6 text-background">
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-foreground p-6 rounded-lg shadow-md"
                  >
                    <h3 className="text-3xl font-semibold font-antonsc">
                      Your Role
                    </h3>
                    <p className="text-2xl font-semibold font-antonsc mt-4"></p>
                    <p className=" text-xl mt-4"> company Name</p>
                    <p className=" mt-4"> Job description </p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>
      <section id="Contact" className="min-h-screen flex items-center ">
        <div className=" w-full max-w-xl  p-2  mx-auto px-4">
          <h2 className="text-4xl font-antonsc font-semibold text-center mb-8">
            Contact Me
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="sender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your Message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={!form.formState.isDirty || !form.formState.isValid}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default SolarYellowPortfolioPage;
