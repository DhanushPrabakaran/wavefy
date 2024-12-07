import { Experience, Message, Project, User } from "@/types/global";

export const sampleUser: User = {
  id: "1",
  name: "Dhanush Prabakaran",
  email: "john@example.com",
  role: "Developer",
  image: "https://avatars.githubusercontent.com/u/105353897",
  website: "https://example.com",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.",
};

export const sampleProjects: Project[] = [
  { id: "1", title: "Project 1", description: "Description of Project 1" },
  { id: "2", title: "Project 2", description: "Description of Project 2" },
  { id: "3", title: "Project 3", description: "Description of Project 3" },
];
export const sampleMessages: Message[] = [
  {
    id: "1",
    sender: "John Doe",
    content: "Hey there! How are you?",
    timestamp: new Date("2024-04-25T08:30:00"),
  },
  {
    id: "2",
    sender: "Alice Smith",
    content: "Hi! I'm doing well, thanks. How about you?",
    timestamp: new Date("2024-04-25T08:32:00"),
  },
  {
    id: "3",
    sender: "John Doe",
    content: "I'm good too. Just working on some projects.",
    timestamp: new Date("2024-04-25T08:35:00"),
  },
];

export const sampleExperiences: Experience[] = [
  {
    id: "1",
    Role: "Software Engineer",
    Start: new Date(),
    End: new Date(),
    Description: "Worked as a Software Engineer at ABC Inc.",
    Company: "",
  },
  {
    id: "2",
    Role: "Frontend Developer",
    Start: new Date(),
    End: new Date(),
    Description: "Worked as a Frontend Developer at XYZ Corp.",
    Company: "",
  },
  {
    id: "3",
    Role: "Frontend Developer",
    Company: "Abc",
    Start: new Date(),
    End: new Date(),
    Description: "Worked as a Frontend Developer at XYZ Corp.",
  },
];
