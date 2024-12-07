/**
 *
 * Define all global types in this file.
 *
 */

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  image: string;
  website: string;
  about: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
};

export type Experience = {
  id: string;
  Role: string;
  Description: string;
  Company: string;
  Start: Date;
  End: Date;
};

export type Message = {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
};
