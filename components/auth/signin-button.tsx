import { signIn } from "@/auth";
import { Button } from "../ui/button";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button className="w-full" type="submit">
        Sign in
      </Button>
    </form>
  );
}
