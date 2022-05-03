import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgfayhW4vLZTx1DL11q1Pkvb6qCqqaTZc",
  authDomain: "connect-final-thesis.firebaseapp.com",
  projectId: "connect-final-thesis",
  storageBucket: "connect-final-thesis.appspot.com",
  messagingSenderId: "1008887317744",
  appId: "1:1008887317744:web:eeae8b09486bfa0a5aae35",
  measurementId: "G-JZLMXDYP1K",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const usersRef = collection(db, "users"); // reference to users collection i firestore
export const postsRef = collection(db, "posts"); // reference to posts collection i firestore
