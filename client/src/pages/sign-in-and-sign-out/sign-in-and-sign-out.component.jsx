import React from "react";
import "./sign-in-and-sign-out.style.scss";

import SignIn from "../../component/sign-in/sign-in.component";
import SingUp from "../../component/sign-up/sign-up.component";

const SignInSignOut = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SingUp />
    </div>
  );
};

export default SignInSignOut;
