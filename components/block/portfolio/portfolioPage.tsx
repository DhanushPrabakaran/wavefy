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
    <div className="min-h-screen font-antonsc">
      {/* Hero Section */}
      <section className="min-h-screen ">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold">{User.name}</h1>
          <p className="mt-4 text-xl">{User.bio}</p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">About Me</h2>
          <p className="text-lg text-center">{User.bio}</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {User.Project.map((project, index) => (
              <div
                key={index}
                className="bg-secondary p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-700 mt-4">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Experience
          </h2>
          <div className="space-y-6">
            {User.Experience.map((experience, index) => (
              <div
                key={index}
                className="bg-secondary p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold">{experience.role}</h3>
                <p className="text-gray-700 mt-4">
                  {format(parseISO(experience.start), "PPP")} -{" "}
                  {format(parseISO(experience.end), "PPP")}
                </p>
                <p className="text-gray-700 mt-4">{experience.company}</p>
                <p className="text-gray-700 mt-4">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="min-h-screen ">
        <div className="max-w-md mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">
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
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Dhanush Prabakaran. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PortfolioPage;
