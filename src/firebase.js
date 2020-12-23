import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCqWu5a73I0LjsHBz7caCSCgocv6r_JCZk",
  authDomain: "reactinstatutorial.firebaseapp.com",
  projectId: "reactinstatutorial",
  storageBucket: "reactinstatutorial.appspot.com",
  messagingSenderId: "150713483621",
  appId: "1:150713483621:web:6750f82a5ef7dd75a2218c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };
