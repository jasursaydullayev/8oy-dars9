// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArePF7Mg6jY-TgsC6YQXCjXyy0IkO9nKs",
  authDomain: "fn12-a2d89.firebaseapp.com",
  projectId: "fn12-a2d89",
  storageBucket: "fn12-a2d89.appspot.com",
  messagingSenderId: "950734793744",
  appId: "1:950734793744:web:a385720e6cc7494e4aee95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider()