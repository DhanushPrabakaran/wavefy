"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input"; // Assuming you have a custom Input component
import { Button } from "@/components/ui/button"; // Assuming you have a custom Button component
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; // Assuming you have custom form components
import { toast } from "@/hooks/use-toast";
import { fetchProject, updateProjectAction } from "@/actions/projectAction";

export default function ProjectForm({ projectId }: { projectId: string }) {
  const projectSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
  });
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: async () => {
      try {
        const project = await fetchProject(projectId);

        if (!project) {
          throw new Error("Project not found");
        }

        return {
          title: project.title || "",
          description: project.description || "",
        };
      } catch (error: unknown) {
        toast({
          title: "Error loading project",
          description:
            error instanceof Error
              ? error.message
              : "An unexpected error occurred",
        });
        return {
          title: "",
          description: "",
        };
      }
    },
  });

  const onSubmit = async (data: z.infer<typeof projectSchema>) => {
    try {
      // Call the action to update the project using the provided projectId
      await updateProjectAction(projectId, data);
      toast({
        title: "Success",
        description: "Project updated successfully.",
      });
    } catch (error: unknown) {
      toast({
        title: "Error updating project",
        description:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Project Title" {...field} />
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
                <Input placeholder="Project Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={ !form.formState.isDirty || !form.formState.isValid}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}

// ProjectForm;
