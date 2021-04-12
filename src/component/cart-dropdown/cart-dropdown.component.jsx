import React from "react";
import "./cart-dropdown.style.scss";

import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-item"></div>
      <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
