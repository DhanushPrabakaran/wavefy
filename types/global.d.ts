/**
 *
 * Define all global types in this file.
 *
//  */
import { User, Experience, Message } from "@prisma/client";
export type User = User;

export type Project = {
  id: string;
  title: string;
  description: string;
};

export type Experience = Experience;

export type Message = Message;

export type UserProfile = {
  name: string | null;
  experience: number | null;
  id: string;
  role: string | null;
  createdAt: Date;
  updatedAt: Date;
  image: string | null;
  email: string;
  bio: string | null;
  website: string | null;
  emailVerified: Date | null;
  Project: Project[]; // Adjust field name based on your schema
  Experience: Experience[]; // Adjust field name based on your schema
  Message: Message[]; // Adjust field name based on your schema
};
