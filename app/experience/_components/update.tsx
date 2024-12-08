"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input"; // Assuming you have a custom Input component
import { Button } from "@/components/ui/button"; // Assuming you have a custom Button component
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; // Assuming you have custom form components
import { toast } from "@/hooks/use-toast";
import {
  fetchExperience,
  updateExperienceAction,
} from "@/actions/experienceAction";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

export default function ProjectForm({
  experienceid,
}: {
  experienceid: string;
}) {
  const experienceSchema = z.object({
    role: z.string().min(1, "Role is required"),
    company: z.string().min(1, "Company is required"),
    start: z
      .string()
      .refine((val) => !isNaN(new Date(val).getTime()), "Invalid date format"),
    end: z
      .string()
      .refine((val) => !isNaN(new Date(val).getTime()), "Invalid date format"),
    description: z.string().min(1, "Description is required"),
  });
  const form = useForm<z.infer<typeof experienceSchema>>({
    resolver: zodResolver(experienceSchema),
    defaultValues: async () => {
      try {
        const project = await fetchExperience(experienceid);

        if (!project) {
          throw new Error("Project not found");
        }

        return {
          role: project.role || "",
          company: project.company || "",
          start: project.start || new Date().toISOString().split("T")[0],
          end: project.start || new Date().toISOString().split("T")[0],
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
          role: "",
          company: "",
          start: new Date().toISOString().split("T")[0],
          end: new Date().toISOString().split("T")[0],
          description: "",
        };
      }
    },
  });

  const onSubmit = async (data: z.infer<typeof experienceSchema>) => {
    try {
      // Call the action to update the project using the provided experienceid
      await updateExperienceAction(experienceid, data);
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
    <section className="min-h-screen flex items-center flex-col align-middle justify-center">
      <h1 className="font-antonsc text-2xl text-center">Create Experience</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          {/* Role */}
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Input placeholder="Role Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company */}
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Company Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Start Date */}
          <FormField
            control={form.control}
            name="start"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <div className="rounded-md  border">
                      <Calendar
                        className="bg-background"
                        mode="single"
                        selected={new Date(field.value)}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </div>
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* End Date */}
          <FormField
            control={form.control}
            name="end"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal bg-background",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4  bg-background opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 bg-background"
                    align="start"
                  >
                    <div className="rounded-md  border">
                      <Calendar
                        className="bg-background"
                        mode="single"
                        selected={new Date(field.value)}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </div>
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Description here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
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
}

// ProjectForm;
