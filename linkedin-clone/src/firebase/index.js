import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyk2gPbH2CuTwthdZmn6HXbkfW3xjPWZw",
  authDomain: "final-thesis-connect.firebaseapp.com",
  projectId: "final-thesis-connect",
  storageBucket: "final-thesis-connect.appspot.com",
  messagingSenderId: "377854198077",
  appId: "1:377854198077:web:ea6b55d46a248155bac554",
  measurementId: "G-JLPFYYEV23"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);