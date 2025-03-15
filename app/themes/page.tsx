import { auth } from "@/auth";
import Header from "@/components/block/Header";
import { prisma } from "@/prisma/db";
import React from "react";
import SelectedTheme from "./_components/select";
const page = async () => {
  const session = await auth();
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email ?? undefined }, // Replace with dynamic user ID logic
    select: { ThemeNo: true, id: true },
  });

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <Header />
      
      <SelectedTheme userId={user.id} Numb={user.ThemeNo} />
    </div>
  );
};

export default page;
