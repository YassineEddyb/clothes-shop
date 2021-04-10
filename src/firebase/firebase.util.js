import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { findRenderedDOMComponentWithTag } from "react-dom/cjs/react-dom-test-utils.development";
import { findAllByDisplayValue } from "@testing-library/dom";

const Config = {
  apiKey: "AIzaSyBVf5L0aheQmMpFvpdRcVYU9L40ot2cqb0",
  authDomain: "shop-app-db-f34c3.firebaseapp.com",
  projectId: "shop-app-db-f34c3",
  storageBucket: "shop-app-db-f34c3.appspot.com",
  messagingSenderId: "244240981384",
  appId: "1:244240981384:web:42f7bfeacbcd824dfeae3d",
  measurementId: "G-STN38QV2RM",
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
