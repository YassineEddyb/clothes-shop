import React from "react";
import { connect } from "react-redux";
import "./checkout-item.style.scss";

import {
  removeItemFromCart,
  decreaseQuantity,
  addToCart,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, removeItem, addItem, decreaseQuantity }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseQuantity(cartItem)}>
          &#10094;
        </div>
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addToCart(item)),
  decreaseQuantity: (item) => dispatch(decreaseQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
