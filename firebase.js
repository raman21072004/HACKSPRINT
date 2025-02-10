// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdPTrxyMoX3pxn2OP1qkm_680fZG9Zy68",
  authDomain: "backend-80297.firebaseapp.com",
  projectId: "backend-80297",
  storageBucket: "backend-80297.firebasestorage.app",
  messagingSenderId: "374132200835",
  appId: "1:374132200835:web:bb9f637111bf493bf4d2b6",
  measurementId: "G-97NJLGX6VQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };