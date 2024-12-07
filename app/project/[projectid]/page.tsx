import ProjectUpdate from "../_components/update";
const page = async ({ params }: { params: Promise<{ projectid: string }> }) => {
  const projectid = (await params).projectid;
  return (
    <section className="min-h-screen">
      <h1 className="fluid-3xl text-center">Project {projectid}</h1>
      <ProjectUpdate />
    </section>
  );
};

export default page;
