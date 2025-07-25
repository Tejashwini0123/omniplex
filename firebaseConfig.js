import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDbBjkS8_p4FGTz1QwRTbBjVWTuIjTniFY",
  authDomain: "omniplex-4c554.firebaseapp.com",
  projectId: "omniplex-4c554",
  storageBucket: "omniplex-4c554.appspot.com",
  messagingSenderId: "39489769374",
  appId: "1:39489769374:web:3c6b86dc1cbe2e21ff108f",
  measurementId: "G-8J5NEP5LPQ"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
