import { prisma } from "@/prisma/db";
import ProjectContainer from "@/components/atoms/ProjectContainer";
import ExperienceContainer from "@/components/atoms/ExperienceContainer";
import StatisticsContainer from "@/components/atoms/StatisticsContainer";
import UserContainer from "@/components/atoms/UserContainer";
import MessageContainer from "@/components/atoms/MessageContainer";

const Page = async () => {
  // Fetch data using Prisma
  const user = await prisma.user.findUnique({
    where: { email: "dhanushprabakaran18@gmail.com" }, // Replace with dynamic user ID logic
    include: {
      Project: true,
      Experience: true,
      Message: true,
    },
  });

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="lg:h-screen flex max-md:p-2 gap-2 max-md:flex-col">
      {/* {JSON.stringify(user, null, 2)} */}
      <UserContainer User={user} />
      <div className="mx-auto w-full overflow-scroll overflow-x-hidden">
        <h2 className="text-2xl font-semibold font-antonsc mb-4">Projects</h2>
        <ProjectContainer projects={user.Project || []} />
        <h2 className="text-2xl font-semibold font-antonsc mb-4">Experience</h2>
        <ExperienceContainer experiences={user.Experience || []} />
        <StatisticsContainer />
        <h2 className="text-2xl font-semibold font-antonsc my-4">Messages</h2>
        <MessageContainer messages={user.Message} />
      </div>
    </div>
  );
};

export default Page;
