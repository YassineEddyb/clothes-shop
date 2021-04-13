import { createSelector } from "reselect";

const userSelect = (state) => state.user;

export const selectCurrentUser = createSelector(
  [userSelect],
  (user) => user.currentUser
);
