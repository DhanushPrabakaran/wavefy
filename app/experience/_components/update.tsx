"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { useEffect } from "react";
import {
  fetchProfileAction,
  updateProfileAction,
} from "@/actions/profileActions";

const FormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  bio: z.string().optional(),
  website: z.string().optional(),
  experience: z.coerce.number().optional(),
});

export default function ExperienceUpdate({ email }: { email: string }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: async () => {
      try {
        const profile = await fetchProfileAction(email);
        return {
          name: profile.name || "",
          email: profile.email || "",
          bio: profile.bio || "",
          website: profile.website || "",
          experience: profile.experience ?? 0,
        };
      } catch (error: unknown) {
        toast({
          title: "Error loading profile",
          description:
            error instanceof Error
              ? error.message
              : "An unexpected error occurred",
        });
        return {
          name: "",
          email: "",
          bio: "",
          website: "",
          experience: 0,
        };
      }
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await updateProfileAction(data);
      toast({
        title: "Profile updated successfully!",
        description: "Your changes have been saved.",
      });
    } catch (error: unknown) {
      toast({
        title: "Error updating profile",
        description:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} disabled />
              </FormControl>
              <FormDescription>Your email cannot be changed.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Input placeholder="Your bio" {...field} />
              </FormControl>
              <FormDescription>
                A short description about yourself.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input placeholder="Your website URL" {...field} />
              </FormControl>
              <FormDescription>
                Your personal or professional website.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experience</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Years of experience"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Your professional experience in years.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
