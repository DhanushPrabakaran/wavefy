import { signOut } from "@/auth";
import Header from "@/components/block/Header";

export default function SignOutPage() {
  return (
    <div>
      <Header />
      <h5>Are you sure you want to sign out?</h5>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
}
