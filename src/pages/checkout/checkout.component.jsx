import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./checkout.style.scss";

import { selectCartItem } from "../../redux/cart/cart.selectors";
import { selectCartTotalPrice } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";
import StripeButton from "../../component/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span className="">product</span>
        </div>
        <div className="header-block">
          <span className="">description</span>
        </div>
        <div className="header-block">
          <span className="">quantity</span>
        </div>
        <div className="header-block">
          <span className="">price</span>
        </div>
        <div className="header-block">
          <span className="">remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL : {totalPrice}$</div>
      <div className="text-warning">
        *please use the following credit card for testing payment* <br />
        4242 4242 4242 4242 -- Exp: 01/22 -- CVV: 123
      </div>
      <StripeButton price={totalPrice} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  totalPrice: selectCartTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
