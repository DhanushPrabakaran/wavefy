// import ExperienceUpdate from "../_components/update";

export default async function Page({
  params,
}: {
  params: Promise<{ experienceid: string }>;
}) {
  // const slug = (await params).slug;
  const experienceid = (await params).experienceid;
  return (
    <section className="min-h-screen">
      <h1 className="fluid-3xl text-center">Experience{experienceid}</h1>
      {/* <ExperienceUpdate /> */}
    </section>
  );
}

// experienceid
