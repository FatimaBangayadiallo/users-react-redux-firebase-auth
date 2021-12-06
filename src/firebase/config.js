import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUHjwnA-kC9CsKCsqO-DZiHiR7dWgTpWg",
  authDomain: "usersreacreduxfireauth.firebaseapp.com",
  projectId: "usersreacreduxfireauth",
  storageBucket: "usersreacreduxfireauth.appspot.com",
  messagingSenderId: "268425823085",
  appId: "1:268425823085:web:a3aa4be0045e25348ad064",
};
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
