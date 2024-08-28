// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZdjk4pGFTdv9sUzOSr8_dctiWNYtwbT4",
  authDomain: "ecofootprint-a5c0e.firebaseapp.com",
  projectId: "ecofootprint-a5c0e",
  storageBucket: "ecofootprint-a5c0e.appspot.com",
  messagingSenderId: "270306484951",
  appId: "1:270306484951:web:3d8b3c9270740d19b9c692"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()