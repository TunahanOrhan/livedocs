import React from "react";
import { SignIn } from "@clerk/nextjs";

const Signin = () => {
  return (
    <main className="auth-page">
      <SignIn />
    </main>
  );
};

export default Signin;
