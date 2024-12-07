// "use client";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Input } from "@/components/ui/input"; // Assuming you have a custom Input component
// import { Button } from "@/components/ui/button";
// import { createProjectAction } from "@/actions/projectAction";
// // Assuming you have a custom Button component
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"; // Assuming you have custom form components
// import { Project } from "@/types/global";

// // ProjectForm component to handle form rendering
// const Page = ({ defaultValues }: { defaultValues: Project }) => {
//   const projectSchema = z.object({
//     title: z.string().min(1, "Title is required"),
//     description: z.string().min(1, "Description is required"),
//   });
//   const form = useForm<Project>({
//     resolver: zodResolver(projectSchema),
//     defaultValues,
//   });

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(createProjectAction)}
//         className="space-y-4"
//       >
//         <FormField
//           control={form.control}
//           name="title"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Title</FormLabel>
//               <FormControl>
//                 <Input placeholder="Project Title" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="description"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Description</FormLabel>
//               <FormControl>
//                 <Input placeholder="Project Description" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// };

// export default Page;
import React from "react";

const page = () => {
  return <div></div>;
};

export default page;
