export const toggleCartHidden = () => ({
  type: "TOGGLE_CART_HIDDEN",
});

export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: "REMOVE_ITEM_FROM_CART",
  payload: item,
});

export const decreaseQuantity = (item) => ({
  type: "DECREASE_QUANTITY",
  payload: item,
});
