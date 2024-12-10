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
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "An error occurred.",
      });
    }
  };

  return (
    <div className="min-h-screen text-emerald-600 relative lg:text-lg scroll-smooth  text-center font-mono">
      {/* Hero Section */}
      <section className="flex absolute w-full z-20  top-0 border-bb bg-transparent dark:border-neutral-800 border-foreground border-forground border-opacity-100 border-dashedchange items-center justify-between py-4 px-2 ">
        <div className="flex justify-between items-center space-x-16">
          <h1 className=" text-xl pointer-events-none   text- uppercase font-extrabold ">
            {User.name}
          </h1>
        </div>

        <nav className="md:flex hidden lg:flex  font-mono justify-between space-x-5 text-sm">
          <Link className="group" href="#Home">
            <div className="  flex flex-grow   ">
              <Button className=" rounded-full ">
                <div className=" rounded-full  absolute -right-3 "></div>
                Home
              </Button>
            </div>
          </Link>
          <Link className="group  " href="#About">
            <div className="  flex flex-grow   ">
              <Button className=" rounded-full  ">
                <div className="  rounded-full bg-foreground absolute -right-3 "></div>
                About
              </Button>
            </div>
          </Link>
          <Link className="group" href="#Project">
            <div className="  flex flex-grow   ">
              <Button className=" rounded-full ">
                <div className=" rounded-full  absolute -right-3 "></div>
                Project
              </Button>
            </div>
          </Link>
          <Link className="group" href="#Experience">
            <div className="  flex flex-grow   ">
              <Button className=" rounded-full ">
                <div className=" rounded-full  absolute -right-3 "></div>
                Experience
              </Button>
            </div>
          </Link>
          <Link className="group" href="#Contact">
            <div className="  flex flex-grow   ">
              <Button className=" rounded-full ">
                <div className=" rounded-full  absolute -right-3 "></div>
                Contact
              </Button>
            </div>
          </Link>
        </nav>

        <div className="flex items-center space-x-2 lg:pr-4">
          <div className="lg:flex hidden space-x-2">
            <Button className=" rounded-full" size="icon">
              <Link href={"/"}>
                <HomeIcon className="size-5" />
              </Link>
            </Button>
            <Button className=" rounded-full" size="icon">
              <Link
                href={User.linkedinLink ? User.linkedinLink : ""}
                className=""
              >
                <LinkedInLogoIcon className="size-5" />
              </Link>
            </Button>
            <Button className=" rounded-full" size="icon">
              <Link href={User.gitLink ? User.gitLink : ""} className="">
                <GitHubLogoIcon className="size-5" />
              </Link>
            </Button>
          </div>
          <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className=" rounded-full"
            size="icon"
          >
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Mobile Menu Button */}
          <div className="  md:hidden pr-2 text-xl font-mono flex flex-grow  group ">
            <Button onClick={toggleMenu} className="  rounded-full ">
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
                <h1 className=" text-xl pointer-events-none  uppercase font-extrabold ">
                  {User.name}
                </h1>
              </div>
              <div className="flex items-center space-x-2 lg:pr-4">
                <Button
                  className=" rounded-full"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  size="icon"
                >
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
                <div className="   lg:hidden  text-xl font-mono flex flex-grow  group ">
                  <Button onClick={toggleMenu} className="  rounded-full ">
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
                  <h1 className="text-xl">0{length}</h1>
                </Link>
                <Link
                  className="group flex border-b justify-between"
                  href="#About"
                  onClick={toggleMenu}
                >
                  <h1 className="  flex text-center justify-center items-center ">
                    About
                  </h1>
                  <h1 className="text-xl">0{length + 1}</h1>
                </Link>
                <Link
                  className="group flex border-b justify-between"
                  href="#Project"
                  onClick={toggleMenu}
                >
                  <h1 className="flex text-center justify-center items-center">
                    Project
                  </h1>
                  <h1 className="text-xl">0{length + 2}</h1>
                </Link>
                <Link
                  className="group flex border-b justify-between"
                  href="#Experience"
                  onClick={toggleMenu}
                >
                  <h1 className="flex text-center justify-center items-center">
                    Experience
                  </h1>
                  <h1 className="text-xl">0{length + 2}</h1>
                </Link>
                <Link
                  className="group flex border-b justify-between"
                  href="#Contact"
                  onClick={toggleMenu}
                >
                  <h1 className="flex text-center justify-center items-center">
                    Contact
                  </h1>
                  <h1 className="text-xl">0{length + 2}</h1>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Home"
        className="min-h-screen w-full relative flex bg-cover bg-fixed bg-[url('../public/Banner.jpeg')] align-middle justify-center items-center"
      >
        <div className="flex flex-col gap-8">
          <h1 className="text-[8vw] font-bold  font-antonsc">{User.name}</h1>
          <p className="mt-4 text-3xl   ">{User.role}</p>
        </div>
        {/* <div className="absolute bottom-0 left-0 -translate-y-1/2 transform">
          <h1 className="origin-left m-3 -rotate-90">{User.email}</h1>
        </div>

        <h1 className="absolute bottom-0  left-0">{User.email}</h1> */}
      </section>

      {/* About Me Section */}
      <section id="About" className="min-h-screen flex items-center">
        <div className="max-w-6xl  mx-auto px-4">
          <h2 className=" text-3xl lg:text-4xl  font-antonsc font-semibold text-center mb-8">
            About Me
          </h2>
          <p className=" border rounded-sm p-2 max-w-6xl text-center">
            {User.bio}
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="Project" className="min-h-screen ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl  font-semibold text-center mb-8 font-antonsc">
            Projects
          </h2>
          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {User.Project.map((project, index) => (
              <div
                key={index}
                className="bg-secondary border p-6 rounded-lg shadow-md"
              >
                <h3 className=" font-semibold">{project.title}</h3>
                <p className="text-muted-foreground mt-4">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="Experience" className="min-h-screen my-3 ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-antonsc font-semibold text-center  mb-8">
            Experience
          </h2>
          <div className="space-y-6 text-background">
            {User.Experience.map((experience, index) => (
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
                <p className=" mt-4">{experience.description}</p>
              </div>
            ))}
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
