import { addItemToCart, decreaseQuantityOrRemoveItem } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cartItems: decreaseQuantityOrRemoveItem(
          state.cartItems,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
