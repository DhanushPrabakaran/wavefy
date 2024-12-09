"use client";

import { format, parseISO } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createMessageAction } from "@/actions/portfolioActions";
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
const PortfolioPage = ({ User }: { User: UserProfile }) => {
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
    <div className="min-h-screen scroll-smooth relative font-roboto">
      {/* Hero Section */}
      <div className="w-full h-20 items-center font-roboto font-semibold absolute p-2 text-xl justify-between flex">
        <h1 className="uppercase ">{User.name}</h1>
        <nav className="flex gap-3">
          <Link href={"#Home"}>Home</Link>
          <Link href={"#About"}>About</Link>
          <Link href={"#Project"}>Project</Link>
          <Link href={"#Experience"}>Experience</Link>
          <Link href={"#Contact"}>Contact</Link>
        </nav>
      </div>
      <section
        id="Home"
        className="min-h-screen flex bg-cover bg-fixed bg-[url('../public/Banner.jpeg')] align-middle justify-center items-center"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-[8vw] font-bold  font-antonsc">{User.name}</h1>
          <p className="mt-4 text-xl text-justify  px-2 ">{User.bio}</p>
        </div>
      </section>

      {/* About Me Section */}
      <section id="About" className="min-h-screen flex items-center">
        <div className="max-w-6xl  mx-auto px-4">
          <h2 className="text-4xl font-antonsc font-semibold text-center mb-8">
            About Me
          </h2>
          <p className="text-lg border rounded-sm p-2 max-w-6xl text-center">
            {User.bio}
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="Project" className="min-h-screen m-4">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-8 font-antonsc">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {User.Project.map((project, index) => (
              <div key={index} className=" border p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-700 mt-4">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="Experience" className="min-h-screen m-4">
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
