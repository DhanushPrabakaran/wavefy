import React from "react";
import { SignIn } from "../auth/signin-button";
import { Button } from "../ui/button";

const SigninBlock = () => {
  return (
    <Button className="w-full" type="submit">
      <SignIn />
    </Button>
  );
};

export default SigninBlock;
