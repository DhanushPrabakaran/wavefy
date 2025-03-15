"use client";
import { updateTheme } from "@/actions/ThemeActions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";
import { StepBackIcon } from "lucide-react";
// import Photo from "@/public/Banner.jpeg";
const Themes = [
  {
    id: 0,
    Name: "Solar Dark Theme",
    PreviewLink: "/themes/solarBlack",
    Image: "/themes/SolarBlackTheme.png",
  },
  {
    id: 1,
    Name: "Solar Red Theme",
    PreviewLink: "/themes/solarRed",
    Image: "/themes/SolarRedTheme.png",
  },
  {
    id: 2,
    Name: "Solarized White Theme",
    PreviewLink: "/themes/solarWhite",
    Image: "/themes/SolarWhiteTheme.png",
  },
  {
    id: 3,
    Name: "Solarized Yellow Theme",
    PreviewLink: "/themes/solarYellow",
    Image: "/themes/SolarYellowTheme.png",
  },
];

const SelectedTheme = ({ userId, Numb }: { userId: string; Numb: number }) => {
  const handleSelectTheme = async (themeId: number) => {
    try {
      await updateTheme(userId, themeId); // Server action is called here

      toast({
        title: "Theme Updated",
        description: `You have successfully selected ${
          Themes.find((t) => t.id === themeId)?.Name
        }.`,
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: unknown) {
      toast({
        title: "Error",
        description: "Failed to update the theme. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="text-center">
      <div className="flex items-center p-6 align-middle justify-center">
        <Button className="  " variant={"outline"} asChild>
          <Link href={"/dashboard"}>
            <StepBackIcon />
            back
          </Link>
        </Button>
        <h1 className="text-3xl flex-1 self-center font-antonsc py-6">
          Pick Your Theme
        </h1>
      </div>
      <div className="flex flex-wrap justify-around gap-2">
        {Themes.map((Theme) => (
          <div
            key={Theme.id}
            className={`flex flex-col items-center gap-4 border rounded-md px-2 py-4 `}
          >
            <Image
              src={Theme.Image}
              alt={Theme.Name}
              width={300}
              height={200}
              className="rounded-md"
            />
            <h2 className="font-antonsc text-xl">{Theme.Name}</h2>
            <div className="flex gap-4">
              <Button asChild>
                <Link href={Theme.PreviewLink}>Preview Theme</Link>
              </Button>
              <Button
                variant={Numb === Theme.id ? "secondary" : "default"}
                disabled={Numb === Theme.id}
                onClick={() => handleSelectTheme(Theme.id)} // Bind the action
              >
                {Numb === Theme.id ? "Selected" : "Select Theme"}
              </Button>
            </div>
          </div>
        ))}
        {/* <div
          className={`flex flex-col items-center gap-4 border rounded-md px-2 py-4 `}
        >
          <Image
            src={Photo}
            alt={""}
            width={300}
            height={200}
            className="rounded-md"
          />
          <h2 className="font-antonsc text-xl"> Working on</h2>
          <div className="flex gap-4">
            <Button asChild>
              <Link href={""}>Preview Theme</Link>
            </Button>
            <Button variant={"default"}>developerme</Button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SelectedTheme;
