import { call, takeLatest, put, all } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.util";

import shopTypes from "./shop.types";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFilure,
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  yield console.log("yuoooooooooooooooooooo i'am fired");
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collections = yield call(convertCollectionsSnapshotToMap, snapShot);
    yield put(fetchCollectionsSuccess(collections));
  } catch (err) {
    yield put(fetchCollectionsFilure(err.massege));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(shopTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
