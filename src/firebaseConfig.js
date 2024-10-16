// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyvgcJ40Z-ZMgg3j4NXaRgQdhnEmmrN1s",
  authDomain: "geminiclone-aa6d9.firebaseapp.com",
  projectId: "geminiclone-aa6d9",
  storageBucket: "geminiclone-aa6d9.appspot.com",
  messagingSenderId: "288564415261",
  appId: "1:288564415261:web:ff2d66dfa768c28e5aeff4",
  measurementId: "G-PXQYLP1MWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);