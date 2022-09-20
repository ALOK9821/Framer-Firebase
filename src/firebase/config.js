// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAaO8CbXA6MAaYxxpC5fkh3vsaRmT0SCI",
  authDomain: "fireagram-790b2.firebaseapp.com",
  projectId: "fireagram-790b2",
  storageBucket: "fireagram-790b2.appspot.com",
  messagingSenderId: "920105607594",
  appId: "1:920105607594:web:5868d8d3f5a3318c468bd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
export {projectStorage , projectFireStore};