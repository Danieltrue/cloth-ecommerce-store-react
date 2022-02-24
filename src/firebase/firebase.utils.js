import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//Firebase config
const config = {
  apiKey: "AIzaSyBoLgumQdhE6TlXY4rmY2AwrnyzOtMIpsw",
  authDomain: "cloth-react-store.firebaseapp.com",
  projectId: "cloth-react-store",
  storageBucket: "cloth-react-store.appspot.com",
  messagingSenderId: "727332549922",
  appId: "1:727332549922:web:41aa66f48287777785617b",
  measurementId: "G-PV7CESRRMN",
};

firebase.initializeApp(config);

//Export this auth firebase
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInwithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
