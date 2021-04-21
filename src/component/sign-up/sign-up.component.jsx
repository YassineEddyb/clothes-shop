import React, { useState } from "react";
import { connect } from "react-redux";
// import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
  const [userCredentails, setUserCredentails] = useState({
    email: "",
    displayName: "",
    password: "",
    passwordConfirm: "",
  });

  const { displayName, email, password, passwordConfirm } = userCredentails;

  const handleSubimt = async (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      alert("password dont match!");
      return;
    }

    signUpStart({ email, password, displayName });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentails({ ...userCredentails, [name]: value });
  };

  return (
    <div className="sign-in">
      <h1>i do not have an account</h1>
      <span> sigh up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubimt}>
        <FormInput
          name="displayName"
          type="text"
          handleChange={handleChange}
          value={displayName}
          label="Display Name"
          required
        />

        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          label="Password"
          required
        />

        <FormInput
          name="passwordConfirm"
          type="password"
          handleChange={handleChange}
          value={passwordConfirm}
          label="Password Confirm"
          required
        />

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredintails) => dispatch(signUpStart(userCredintails)),
});

export default connect(null, mapDispatchToProps)(SignUp);
