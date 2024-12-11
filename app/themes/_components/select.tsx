"use client";
import { updateTheme } from "@/actions/ThemeActions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";

const Themes = [
  {
    id: 1,
    Name: "Light Theme",
    PreviewLink: "/themes/light",
    Image: "/Banner.jpeg",
  },
  {
    id: 2,
    Name: "Dark Theme",
    PreviewLink: "/themes/dark",
    Image: "/Banner.jpeg",
  },
  {
    id: 3,
    Name: "Solarized Theme",
    PreviewLink: "/themes/solarized",
    Image: "/Banner.jpeg",
  },
  {
    id: 4,
    Name: "High Contrast Theme",
    PreviewLink: "/themes/high-contrast",
    Image: "/Banner.jpeg",
  },
  {
    id: 5,
    Name: "Sepia Theme",
    PreviewLink: "/themes/sepia",
    Image: "/Banner.jpeg",
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
      <h1 className="text-3xl font-antonsc py-6">Pick Your Theme</h1>
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
      </div>
    </div>
  );
};

export default SelectedTheme;
