"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input"; // Assuming you have a custom Input component
import { Button } from "@/components/ui/button";
import { createProjectAction } from "@/actions/projectAction";
// Assuming you have a custom Button component
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; // Assuming you have custom form components
import { Project } from "@/types/global";

const Page = () => {
  const projectSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
  });
  const form = useForm<Project>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  return (
    <section className="min-h-screen flex items-center flex-col align-middle justify-center">
      <h1 className=" font-antonsc text-2xl text-center"> Create Project</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(createProjectAction)}
          className="w-2/3 space-y-6 "
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Project Title"
                    value={field.value || ""}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Project Description"
                    value={field.value || ""}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
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
    </section>
  );
};

export default Page;
