// import { fetchProfileAction } from "@/actions/portfolioActions";
// import * as User from "@/public/SampleData.json";
import SolarBlackPortfolioPage from "@/components/block/portfolio/SolarBlackPortfolioPage";
import SolarRedPortfolioPage from "@/components/block/portfolio/SolarRedPortfolioPage";
import SolarWhitePortfolioPage from "@/components/block/portfolio/SolarWhitePortfolioPage";
import SolarYellowPortfolioPage from "@/components/block/portfolio/SolarYellowPortfolioPage";
import { UserProfile } from "@/types/global";
const themeMap: Record<string, React.ComponentType<{ User: UserProfile }>> = {
  solarBlack: SolarBlackPortfolioPage,
  solarRed: SolarRedPortfolioPage,
  solarWhite: SolarWhitePortfolioPage,
  solarYellow: SolarYellowPortfolioPage,
};
const User: UserProfile = {
  id: "cm4i54jqc0000hgr5lglb5rj6",
  name: "Dhanush Prabakaran",
  email: "dhanushprabakaran18@gmail.com",
  emailVerified: null,
  image: "https://avatars.githubusercontent.com/u/105353897?v=4",
  role: "Full Stack Developer, Ui/UX Designer",
  instaLink: "",
  gitLink: "https://github.com/dhanushPrabakaran/",
  linkedinLink: "https://www.linkedin.com/in/dhanushprabakar/",
  createdAt: new Date("2024-12-10T07:29:00.900Z"),
  updatedAt: new Date("2024-12-11T15:51:21.903Z"),
  bio: "Hey there! Im a software developer who builds cool, intuitive web apps that solve real problems. Ive been diving deep into the MERN stack, Next.js, and DSA—anything that makes coding exciting and challenging. When Im not glued to my keyboard, Im either messing around with new tech tools, sharing my thoughts on my blog, or just soaking up inspiration from the awesome tech community. Codings my jam, but I love geeking out over anything tech-related!",
  experience: 2,
  website: "https://developerdiary.vercel.app/",
  Project: [
    {
      id: "cm4is3geq0001hg0huqr0laf0",
      title: "Developer Diary",
      description:
        "•Hey there, explorer! Welcome to my little corner of the internet, where I spill the tea on my adventures, tech obsessions, work-life hustles, and everything in between. Whether it’s chasing sunsets, geeking out over the latest gadgets, or navigating the chaos of adulting, this is your front-row seat to all the real, raw, and relatable moments of my journey.",
      userId: "cm4i54jqc0000hgr5lglb5rj6",
      liveLink: "https://developerdiary.vercel.app/",
      gitLink: "https://github.com/DhanushPrabakaran/uidesign",
      createdAt: new Date("2024-12-10T18:12:01.106Z"),
      updatedAt: new Date("2024-12-10T18:12:01.106Z"),
    },
    {
      id: "cm4jszqa60001hgek5kipx7tf",
      title: "portfolioforge",
      description: "A portfolio Building and tracking app",
      userId: "cm4i54jqc0000hgr5lglb5rj6",
      liveLink: "https://wavy.vercel.app/",
      gitLink: "https://github.com/DhanushPrabakaran/wavefy",
      createdAt: new Date("2024-12-11T11:24:53.070Z"),
      updatedAt: new Date("2024-12-11T11:24:53.070Z"),
    },
  ],
  Experience: [
    {
      id: "cm4k80asn0001hglvrpfpmpim",
      role: "Web Developer",
      start: "2022-08-01",
      end: "2023-06-30",
      description:
        "During my internship at Chanakya Company, I utilized HTML, CSS, JavaScript, and Express to develop a website feature. This feature allowed users to answer multiple-choice questions about different mental health situations. Based on their responses, the website provided personalized suggestions and advice.",
      company: "Chanakya Mental Health Service · Internship",
      userId: "cm4i54jqc0000hgr5lglb5rj6",
      createdAt: new Date("2024-12-11T18:25:13.896Z"),
      updatedAt: new Date("2024-12-11T18:25:13.896Z"),
    },
    {
      id: "cm4k83h2b0003hglvv0wmlnrt",
      role: "Cloud Intern",
      start: "2024-01-01",
      end: "2024-03-31",
      description:
        "At Cloud-PlusPlus, I gained practical experience with AWS services such as EC2, S3, Lambda, RDS, and DynamoDB. I contributed to designing and deploying cloud-based solutions and resolved cloud infrastructure issues. I stayed updated on the latest AWS technologies.",
      company: "Cloud-PlusPlus",
      userId: "cm4i54jqc0000hgr5lglb5rj6",
      createdAt: new Date("2024-12-11T18:27:41.987Z"),
      updatedAt: new Date("2024-12-11T18:27:41.987Z"),
    },
  ],
  Message: [],
};

export default async function Page({
  params,
}: {
  params: Promise<{ themeid: string }>;
}) {
  const themename = (await params).themeid;

  const ThemeComponent = themeMap[themename] || SolarBlackPortfolioPage;

  return (
    <>
      <ThemeComponent User={User as UserProfile} />
    </>
  );
}
