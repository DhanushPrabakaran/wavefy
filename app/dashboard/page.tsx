import {
  sampleUser,
  sampleProjects,
  sampleExperiences,
  sampleMessages,
} from "@/lib/sampledata";
import { Project, Experience, Message, User } from "@/types/global";
// import Link from "next/link";
// import { auth } from "@/auth";
// import Banner from "@/public/Banner.jpeg";
// import { revalidatePath } from "next/cache";
import ProjectContainer from "@/components/atoms/ProjectContainer";
import ExperienceContainer from "@/components//atoms/ExperienceContainer";
import StatisticsContainer from "@/components//atoms/StatisticsContainer";
import UserContainer from "@/components//atoms/UserContainer";
import MessageContainer from "@/components//atoms/MessageContainer";
const Page = async () => {
  const user: User = sampleUser;

  const projects: Project[] = sampleProjects;

  const experiences: Experience[] = sampleExperiences;

  const messages: Message[] = sampleMessages;
  return (
    <div className=" lg:h-screen flex max-md:p-2 gap-2 max-md:flex-col">
      <UserContainer User={user} />
      <div className=" mx-auto overflow-scroll  overflow-x-hidden">
        <h2 className="text-xl font-semibold  mb-4">Projects</h2>
        <ProjectContainer projects={projects} />
        <h2 className="text-xl font-semibold  mb-4">Experience</h2>
        <ExperienceContainer experiences={experiences} />
        <StatisticsContainer />
        <h2 className="text-xl font-semibold  mb-4">Message</h2>
        <MessageContainer messages={messages} />
      </div>
    </div>
  );
};
export default Page;
