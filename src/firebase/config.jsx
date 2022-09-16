import firebase from "firebase/app"
import "firebase/auth";

const config = firebase.initializeApp({
    apiKey: "AIzaSyBEBUQloPIz92BfnVRIHPPltqoM5I6ITXE",
  authDomain: "netflix-fb528.firebaseapp.com",
  projectId: "netflix-fb528",
  storageBucket: "netflix-fb528.appspot.com",
  messagingSenderId: "157693845076",
  appId: "1:157693845076:web:67e895bf1670d6e55257c1",
  measurementId: "G-YNTJB8GW5G"
});

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default config;