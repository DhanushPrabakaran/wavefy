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
