// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import { collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUPlpBUGM2O_lABi2SguxZxzNyZd5x4gY",
  authDomain: "immortalgram-46505.firebaseapp.com",
  projectId: "immortalgram-46505",
  storageBucket: "immortalgram-46505.appspot.com",
  messagingSenderId: "996388965641",
  appId: "1:996388965641:web:91b8ca6ad0ab575a7497d8"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const projectStorage = getStorage();
const projectFirestore = getFirestore();
const collectionRef = collection(projectFirestore, 'images');
export { projectStorage, projectFirestore, collectionRef };