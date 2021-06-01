import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQ7ss3P2If2QwKN8mwA58N58PpXsh7JL8",
  authDomain: "market-77786.firebaseapp.com",
  projectId: "market-77786",
  storageBucket: "market-77786.appspot.com",
  messagingSenderId: "404081725513",
  appId: "1:404081725513:web:9e2c2d48863b8e72bbef98",
  measurementId: "G-E2QPQHMRB5",
};

export default firebase.initializeApp(firebaseConfig);

export const storageService = firebase.storage();
