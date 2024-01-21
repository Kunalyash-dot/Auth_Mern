// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-76261.firebaseapp.com",
  projectId: "mern-auth-76261",
  storageBucket: "mern-auth-76261.appspot.com",
  messagingSenderId: "68728214830",
  appId: "1:68728214830:web:09fe9eccba14fcaf4c56bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);