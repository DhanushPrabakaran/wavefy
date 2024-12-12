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
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

// Assuming you have custom form components
import { toast } from "@/hooks/use-toast";
import { fetchProject, updateProjectAction } from "@/actions/projectAction";
import { Textarea } from "@/components/ui/textarea";
import { StepBackIcon } from "lucide-react";
// import Header from "@/components/block/Header";

export default function ProjectForm({ projectId }: { projectId: string }) {
  const router = useRouter();

  const projectSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    liveLink: z.string().url().optional().or(z.literal("")),
    gitLink: z.string().url().optional().or(z.literal("")),
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
          liveLink: project.liveLink || "",
          gitLink: project.gitLink || "",
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
          liveLink: "",
          gitLink: "",
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
    <div className="min-h-screen  flex items-center flex-col align-middle justify-center">
      <div className="w-2/3 space-y-6 ">
        <Button
          variant={"outline"}
          className="self-start"
          onClick={() => router.back()}
        >
          <StepBackIcon />
          back
        </Button>
        <div className="text-center">
          <h1 className="font-semibold font-antonsc text-xl uppercase">
            Project Update Form
          </h1>
          <p>You can update your project details here</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title*</FormLabel>
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
                  <FormLabel>GitHub Link*</FormLabel>
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
            />{" "}
            <FormField
              control={form.control}
              name="liveLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>live Link*</FormLabel>
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
                  <FormLabel>Description*</FormLabel>
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
    </div>
  );
}

// ProjectForm;
