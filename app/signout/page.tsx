import { signOut } from "@/auth";
import Header from "@/components/block/Header";
import { Button } from "@/components/ui/button";

export default function SignOutPage() {
  return (
    <div className="flex flex-col w-full  h-full">
      <Header />
      <div className="flex justify-center flex-grow h-screen align-middle items-center flex-col">
        <h5 className=" text-xl">Are you sure you want to sign out?</h5>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <Button type="submit">Sign out</Button>
        </form>
      </div>
    </div>
  );
}
