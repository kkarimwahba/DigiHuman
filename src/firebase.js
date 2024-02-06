import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyB-mtPWw5tzzqBMrVXOzfJWmGqmE_9tezM",
  authDomain: "digi-dcd10.firebaseapp.com",
  projectId: "digi-dcd10",
  storageBucket: "digi-dcd10.appspot.com",
  messagingSenderId: "970972212852",
  appId: "1:970972212852:web:0b22eb3f086f672be1eb21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore= getFirestore(app);
export const auth = getAuth(app);
