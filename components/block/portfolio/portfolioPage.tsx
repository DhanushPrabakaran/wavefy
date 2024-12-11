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
import { useTheme } from "next-themes";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  MoonIcon,
  SunIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import HorizontalScroll2 from "@/components/ui/HorizontalScroll2";
const PortfolioPage = ({ User }: { User: UserProfile }) => {
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
  const { theme, setTheme } = useTheme();
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
    <div className="min-h-screen text-emerald-600 relative lg:text-lg scroll-smooth  text-center font-mono font-bold">
      {/* Hero Section */}
      <section className="flex absolute w-full z-20  top-0 border-bb bg-transparent dark:border-neutral-800 border-foreground border-forground border-opacity-100 border-dashedchange items-center justify-between py-4 px-2 ">
        <div className="flex justify-between items-center space-x-16">
          <h1 className=" text-2xl  lg:text-3xl  font-antonsc pointer-events-none    uppercase font-extrabold ">
            {User.name}
          </h1>
        </div>

        <nav className="md:flex hidden lg:flex  font-mono justify-between space-x-5 text-sm">
          <Link className="group" href="#Home">
            <div className="  flex flex-grow   ">
              <Button className="  ">
                <div className="   absolute -right-3 "></div>
                Home
              </Button>
            </div>
          </Link>
          <Link className="group  " href="#About">
            <div className="  flex flex-grow   ">
              <Button className="   ">
                <div className="   bg-foreground absolute -right-3 "></div>
                About
              </Button>
            </div>
          </Link>
          <Link className="group" href="#Project">
            <div className="  flex flex-grow   ">
              <Button className="  ">
                <div className="   absolute -right-3 "></div>
                Project
              </Button>
            </div>
          </Link>
          <Link className="group" href="#Experience">
            <div className="  flex flex-grow   ">
              <Button className="  ">
                <div className="   absolute -right-3 "></div>
                Experience
              </Button>
            </div>
          </Link>
          <Link className="group" href="#Contact">
            <div className="  flex flex-grow   ">
              <Button className="  ">
                <div className="   absolute -right-3 "></div>
                Contact
              </Button>
            </div>
          </Link>
        </nav>

        <div className="flex items-center space-x-2 lg:pr-4">
          <div className="lg:flex hidden space-x-2">
            <Button className=" " size="icon">
              <Link href={"/"}>
                <HomeIcon className="size-5" />
              </Link>
            </Button>
            <Button className=" " size="icon">
              <Link
                href={User.linkedinLink ? User.linkedinLink : ""}
                className=""
              >
                <LinkedInLogoIcon className="size-5" />
              </Link>
            </Button>
            <Button className=" " size="icon">
              <Link href={User.gitLink ? User.gitLink : ""} className="">
                <GitHubLogoIcon className="size-5" />
              </Link>
            </Button>
          </div>
          <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className=" "
            size="icon"
          >
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Mobile Menu Button */}
          <div className="  md:hidden pr-2 text-xl font-mono flex flex-grow  group ">
            <Button onClick={toggleMenu} className="   ">
              Menu
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 md:hidden left-0 bg-background  w-full h-full transform transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="py-4 px-2 h-full flex flex-col items-center">
            <div className="w-full flex justify-between  items-center">
              <div className="flex justify-between items-center space-x-16">
                <h1 className=" text-2xl  lg:text-3xl  font-antonsc pointer-events-none    uppercase font-extrabold ">
                  {User.name}
                </h1>
              </div>
              <div className="flex items-center space-x-2 lg:pr-4">
                <Button
                  className=" "
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  size="icon"
                >
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
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
      <section
        id="Home"
        className="min-h-screen w-full overflow-x-hidden  relative flex bg-cover bg-fixed bg-[url('../public/Banner.jpeg')] align-middle justify-center items-center"
      >
        <div className="flex flex-col w-full gap-8">
          {/* <h1 className="text-[8vw] font-bold  font-antonsc">{User.name}</h1> */}
          <p className="mt-4 text-3xl   ">{User.role}</p>
        </div>
        <HorizontalScroll2 name={User.name || ""} />
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
      <HorizontalScroll items={User.Project} />

      {/* Experience Section */}
      <section id="Experience" className="min-h-screen my-3 ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-antonsc font-semibold text-center  mb-8">
            Experience
          </h2>
          <div className="space-y-6 text-background">
            {User.Experience.length > 0 ? (
              User.Experience.map((experience, index) => (
                <div
                  key={index}
                  className="bg-foreground p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-3xl font-semibold font-antonsc">
                    {experience.role}
                  </h3>
                  <p className="text-2xl font-semibold font-antonsc mt-4">
                    {format(parseISO(experience.start), "PPP")} -{" "}
                    {format(parseISO(experience.end), "PPP")}
                  </p>
                  <p className=" text-xl mt-4">{experience.company}</p>
                  <p className=" mt-4 ">{experience.description}</p>
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
                      <p className="text-2xl font-semibold font-antonsc mt-4">
                        {/* {format(parseISO(experience.start), "PPP")} -{" "}
                        {format(parseISO(experience.end), "PPP")} */}
                      </p>
                      <p className=" text-xl mt-4"> company Name</p>
                      <p className=" mt-4"> Job description </p>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section id="Contact" className="min-h-screen flex items-center ">
        <div className=" w-full max-w-xl mx-auto px-4">
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
      {/* Footer */}
    </div>
  );
};

export default PortfolioPage;
