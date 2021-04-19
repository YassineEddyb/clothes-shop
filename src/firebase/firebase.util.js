import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

export const createUserProfileDocument = async (userAuth, additionalDate) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalDate,
      });
    } catch (err) {
      console.log("error when creating user" + err.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  return collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  // return transformedCollections.reduce((acc, collection) => {
  //   acc[collection.title.toLowerCase()] = collection;
  //   return acc;
  // }, {});
};

export default firebase;
