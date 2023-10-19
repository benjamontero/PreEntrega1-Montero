// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA2IsYggA3KFLPUp5U7DsO59NZ8fgwvmk",
  authDomain: "matear-shop.firebaseapp.com",
  projectId: "matear-shop",
  storageBucket: "matear-shop.appspot.com",
  messagingSenderId: "285965537044",
  appId: "1:285965537044:web:7981e0e7bbd2b946043c01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);