import React, { Component } from "react";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";
// import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      displayName: "",
      password: "",
      passwordConfirm: "",
    };
  }

  handleSubimt = async (event) => {
    event.preventDefault();
    const { displayName, email, password, passwordConfirm } = this.state;
    const { signUpStart } = this.props;

    if (password !== passwordConfirm) {
      alert("password dont match!");
      return;
    }

    signUpStart({ email, password, displayName });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, passwordConfirm } = this.state;
    return (
      <div className="sign-in">
        <h1>i do not have an account</h1>
        <span> sigh up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubimt}>
          <FormInput
            name="displayName"
            type="text"
            handleChange={this.handleChange}
            value={displayName}
            label="Display Name"
            required
          />

          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={password}
            label="Password"
            required
          />

          <FormInput
            name="passwordConfirm"
            type="password"
            handleChange={this.handleChange}
            value={passwordConfirm}
            label="Password Confirm"
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredintails) => dispatch(signUpStart(userCredintails)),
});

export default connect(null, mapDispatchToProps)(SignUp);
