import React from "react";
import { SignUp } from "@clerk/nextjs";

const Signup = () => {
  return (
    <main className="auth-page">
      <SignUp />
    </main>
  );
};

export default Signup;
