import shopTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: shopTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsFilure = (err) => ({
  type: shopTypes.FETCH_COLLECTIONS_FILURE,
  payload: err,
});
