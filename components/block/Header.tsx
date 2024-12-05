import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/ModeToggle";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SignOut } from "../auth/signout-button";
import { SignIn } from "../auth/signin-button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const Header = async () => {
  const session = await auth();

  return (
    <div className=" border-b items-center flex w-full justify-between px-2 py-4">
      <h1 className=" font-antonsc text-xl uppercase ">wavefy</h1>
      <nav className="flex space-x-3">
        <ModeToggle />
        <Button>Menu</Button>
        {session?.user?.image ? (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar>
                <AvatarImage src={session?.user?.image} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-40 p-2 justify-center flex items-stretch flex-col gap-2">
              <Button>Profile</Button>
              <SignOut />
            </PopoverContent>
          </Popover>
        ) : (
          <SignIn />
        )}
      </nav>
    </div>
  );
};

export default Header;
