import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  return (
    <div className="flex flex-col w-full  h-full">
      <div className="flex justify-center  flex-grow h-screen align-middle items-center flex-col">
        <div className="border p-6  text-center">
          <form
            className=""
            action={async () => {
              "use server";
              await signIn("github", { redirectTo: "/" });
            }}
          >
            <Button type="submit">Signin with GitHub</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
