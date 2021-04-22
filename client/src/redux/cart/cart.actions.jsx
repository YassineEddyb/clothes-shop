import cartTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartTypes.TOGGLE_CART_HIDDEN,
});

export const addToCart = (item) => ({
  type: cartTypes.ADD_TO_CART,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: cartTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const decreaseQuantity = (item) => ({
  type: cartTypes.DECREASE_QUANTITY,
  payload: item,
});

export const clearCart = () => ({
  type: cartTypes.CLEAR_CART,
});
