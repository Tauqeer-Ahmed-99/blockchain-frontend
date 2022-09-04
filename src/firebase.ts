import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9hkqB0_DylfR4zqWE7rZMnD20USIw-Lo",
  authDomain: "tauqeer-blockchain.firebaseapp.com",
  projectId: "tauqeer-blockchain",
  storageBucket: "tauqeer-blockchain.appspot.com",
  messagingSenderId: "258848133307",
  appId: "1:258848133307:web:1ec4f6260bba303c22199e",
  measurementId: "G-4FCV1MBQSF",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
