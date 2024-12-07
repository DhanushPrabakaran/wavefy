// import Header from "@/components/Common/header";
import ProjectUpdate from "./_components/update";

const page = async () => {
  // const session = await auth();
  return (
    <>
      {/* <Header /> */}
      <section className="min-h-screen">
        <h1 className="fluid-3xl text-center">Project</h1>
        <ProjectUpdate />
      </section>
    </>
  );
};

export default page;
