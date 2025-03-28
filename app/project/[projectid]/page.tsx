import { Suspense } from "react";
import BlogSuspense from "@/components/suspense/BlogSuspence";
import ProjectForm from "../_components/update";
import Header from "@/components/block/Header";
// import Header from "@/components/block/Header";

export default async function Page({
  params,
}: {
  params: Promise<{ projectid: string }>;
}) {
  const projectid = (await params).projectid;
  // const data = await fetchProject(projectid);
  return (
    <div>
      <Header />
      <Suspense fallback={<BlogSuspense />}>
        <ProjectForm projectId={projectid} />
      </Suspense>
    </div>
  );
}
