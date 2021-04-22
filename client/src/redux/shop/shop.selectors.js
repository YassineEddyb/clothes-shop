import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find((collection) =>
      collection ? collection.title.toLowerCase() === collectionUrlParam : null
    )
  );

export const selectIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
