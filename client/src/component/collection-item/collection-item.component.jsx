import React from "react";
import { connect } from "react-redux";
import "./collection-item.style.scss";

import CustomButton from "../custom-button/custom-button.component";
import { addToCart } from "../../redux/cart/cart.actions";

const CollectionItem = ({ addToCart, item }) => {
  const { name, imageUrl, price } = item;
  console.log(item);
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <div className="collection-footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <CustomButton
        className="custom-button"
        onClick={() => addToCart(item)}
        inverted
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
