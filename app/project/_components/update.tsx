"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// Define the validation schema using Zod
const projectSchema = z.object({
  name: z
    .string()
    .min(2, "Role must be at least 2 characters")
    .max(50, "Role cannot exceed 50 characters"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  joinDate: z.string().nonempty("Join date is required"),
  endDate: z.string().nonempty("End date is required"),
  website: z.string().url("Must be a valid URL"),
  description: z.string().optional(),
  // .max(50, "Role cannot exceed 50 characters"),
});

type ProjectFormData = z.infer<typeof projectSchema>;

const ProjectUpdate = () => {
  const [submittedData, setSubmittedData] = useState<ProjectFormData | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  });

  const onSubmit: SubmitHandler<ProjectFormData> = (data) => {
    console.log("Form Data Submitted:", data);
    setSubmittedData(data); // Mock API response or state update
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-6">
      {/* Input for role */}
      <label className="fluid-md mb-2">Role*</label>
      <input
        {...register("name")}
        type="text"
        placeholder="Enter Your Job Role..."
        className="border-2 border-stone-300 rounded p-2 w-full mb-4"
      />
      {errors.name && <p className="text-red-600">{errors.name.message}</p>}

      {/* Input for company */}
      <label className="fluid-md mb-2">Company*</label>
      <input
        {...register("company")}
        type="text"
        placeholder="Enter Your Company Here..."
        className="border-2 border-stone-300 rounded p-2 w-full mb-4"
      />
      {errors.company && (
        <p className="text-red-600">{errors.company.message}</p>
      )}

      {/* Input for join date */}
      <label className="fluid-md mb-2">Join Date*</label>
      <input
        {...register("joinDate")}
        type="month"
        className="border-2 border-stone-300 rounded p-2 w-full mb-4"
      />
      {errors.joinDate && (
        <p className="text-red-600">{errors.joinDate.message}</p>
      )}

      {/* Input for end date */}
      <label className="fluid-md mb-2">End Date*</label>
      <input
        {...register("endDate")}
        type="month"
        className="border-2 border-stone-300 rounded p-2 w-full mb-4"
      />
      {errors.endDate && (
        <p className="text-red-600">{errors.endDate.message}</p>
      )}

      {/* Input for website */}
      <label className="fluid-md mb-2">Website*</label>
      <input
        {...register("website")}
        type="url"
        placeholder="Enter Your Website URL..."
        className="border-2 border-stone-300 rounded p-2 w-full mb-4"
      />
      {errors.website && (
        <p className="text-red-600">{errors.website.message}</p>
      )}

      {/* Textarea for description */}
      <label className="fluid-md mb-2">Description (optional)</label>
      <textarea
        {...register("description")}
        className="border-2 border-stone-300 rounded p-2 w-full mb-4"
        rows={4}
        placeholder="Enter Your Experience Here..."
      />
      {errors.description && (
        <p className="text-red-600">{errors.description.message}</p>
      )}

      {/* Submit button */}
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Update Project
      </button>

      {/* Display submitted data */}
      {submittedData && <pre>{JSON.stringify(submittedData, null, 2)}</pre>}
    </form>
  );
};

export default ProjectUpdate;
