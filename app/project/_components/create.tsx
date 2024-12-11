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
import { Textarea } from "@/components/ui/textarea";

const CreateProject = () => {
  const projectSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    liveLink: z.string().url().optional().or(z.literal("")),
    gitLink: z.string().url().optional().or(z.literal("")),
  });
  const form = useForm<Project>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      liveLink: "",
      gitLink: "",
    },
  });

  return (
    <div className="min-h-screen  flex items-center flex-col align-middle justify-center">
      <div className="text-center">
        <h1 className="font-semibold font-antonsc text-xl uppercase">
          Project Create Form
        </h1>
        <p>You can enter your project details here</p>
      </div>
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
            name="gitLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GitHub Link</FormLabel>
                <FormControl>
                  <Input
                    placeholder="github repo link"
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
            name="liveLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>live Link</FormLabel>
                <FormControl>
                  <Input
                    placeholder="live Link"
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
                  <Textarea
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
    </div>
  );
};

export default CreateProject;
