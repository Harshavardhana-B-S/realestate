
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXcTntAHfgsnOxvihM3llMhPpkIYmzMXk",
  authDomain: "realestate-b66b1.firebaseapp.com",
  projectId: "realestate-b66b1",
  storageBucket: "realestate-b66b1.appspot.com",
  messagingSenderId: "312746142175",
  appId: "1:312746142175:web:2ff672727caa4a7527fc6a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db=getFirestore()