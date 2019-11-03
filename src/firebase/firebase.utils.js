import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAWUw3U8kDk-1xKCwFyw-D3cMkjwyKbePA",
  authDomain: "crwn-db-93f19.firebaseapp.com",
  databaseURL: "https://crwn-db-93f19.firebaseio.com",
  projectId: "crwn-db-93f19",
  storageBucket: "crwn-db-93f19.appspot.com",
  messagingSenderId: "966780527833",
  appId: "1:966780527833:web:5f62f4d2cd2be34ea0cac8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
