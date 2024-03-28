import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyA9UR8WJJXSqg-_4g9M0Lk3rgjWyafu8nE",
  authDomain: "portfolio-2f0c9.firebaseapp.com",
  projectId: "portfolio-2f0c9",
  storageBucket: "portfolio-2f0c9.appspot.com",
  messagingSenderId: "571838336094",
  appId: "1:571838336094:web:3522b0736d69db34f378cf",
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
