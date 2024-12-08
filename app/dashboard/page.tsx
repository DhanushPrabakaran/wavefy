import { prisma } from "@/prisma/db";
import ProjectContainer from "@/components/atoms/ProjectContainer";
import ExperienceContainer from "@/components/atoms/ExperienceContainer";
import StatisticsContainer from "@/components/atoms/StatisticsContainer";
import UserContainer from "@/components/atoms/UserContainer";
import MessageContainer from "@/components/atoms/MessageContainer";
import { auth } from "@/auth";

const Page = async () => {
  const session = await auth();
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email ?? undefined }, // Replace with dynamic user ID logic
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
      <UserContainer User={user} />
      <div className=" w-full lg:overflow-scroll overflow-x-hidden">
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
