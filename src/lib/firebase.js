
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDosggbvegZN5fzCl9d7q27pZF5HKDbpjE",
  authDomain: "wetalk-4d115.firebaseapp.com",
  projectId: "wetalk-4d115",
  storageBucket: "wetalk-4d115.appspot.com",
  messagingSenderId: "825288278998",
  appId: "1:825288278998:web:d4fd8127897fbf2cb19a77",
  measurementId: "G-MJH1BJ02VM"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth =getAuth();
export const db =getFirestore(); 
export const storage = getStorage(); 

