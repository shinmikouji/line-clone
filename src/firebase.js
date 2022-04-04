import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBQ8yWkaTaiTOnmAWp6Yv6G9bKbMVAmvFU",
  authDomain: "line-clone-cd275.firebaseapp.com",
  projectId: "line-clone-cd275",
  storageBucket: "line-clone-cd275.appspot.com",
  messagingSenderId: "483302723368",
  appId: "1:483302723368:web:0fbbcdb4294b249e00ca1d"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};