import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyArvpenEUnW4pTK_xkKiBS7tHZ4umLb-WQ",
  authDomain: "login-4903b.firebaseapp.com",
  projectId: "login-4903b",
  storageBucket: "login-4903b.appspot.com",
  messagingSenderId: "941381768058",
  appId: "1:941381768058:web:da4ddfedf928fc6e893cc3"
};
const firebaseDB = firebase.initializeApp(firebaseConfig);
const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export { auth, googleAuthProvider, facebookAuthProvider, db,firebaseDB};