import { initializeApp } from "firebase/app";
import conf from "./conf";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
  apiKey: conf.apiKey,
  authDomain: conf.authDomain,
  projectId: conf.projectId,
  storageBucket: conf.storageBucket,
  messagingSenderId: conf.messagingSenderId,
  appId: conf.appId,
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
