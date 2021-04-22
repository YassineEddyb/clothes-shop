import { createSelector } from "reselect";

const cartSelect = (state) => state.cart;

export const selectCartItem = createSelector(
  [cartSelect],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [cartSelect],
  (cart) => cart.hidden
);

export const selectCartItemCount = createSelector(
  [selectCartItem],
  (cartItems) =>
    cartItems.reduce(
      (quantityAcc, cartItem) => quantityAcc + cartItem.quantity,
      0
    )
);

export const selectCartTotalPrice = createSelector(
  [selectCartItem],
  (cartItems) =>
    cartItems.reduce(
      (quantityAcc, cartItem) =>
        quantityAcc + cartItem.quantity * cartItem.price,
      0
    )
);
