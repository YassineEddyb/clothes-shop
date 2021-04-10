import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleSign, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${isGoogleSign ? "google-sign-in" : null}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
