import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({
  children,
  isGoogleSign,
  isInverted,
  ...otherProps
}) => {
  return (
    <button
      className={`custom-button 
      ${isGoogleSign ? "google-sign-in" : null} 
      ${isInverted ? "inverted" : null}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
