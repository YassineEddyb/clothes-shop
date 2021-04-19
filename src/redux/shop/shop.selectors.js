import { createSelector } from "reselect";

const COLLECTIONS_ID_MAP = {
  hats: 1,
  jackets: 2,
  sneakers: 3,
  womens: 4,
  mens: 5,
};

const selectChop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectChop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find((collection) =>
      collection ? collection.title.toLowerCase() === collectionUrlParam : null
    )
  );
