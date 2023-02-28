
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhDylWpQnsZGAl2hsa9a9n4cLeQ4OCZxw",
  authDomain: "slack-e1ec3.firebaseapp.com",
  projectId: "slack-e1ec3",
  storageBucket: "slack-e1ec3.appspot.com",
  messagingSenderId: "45488634218",
  appId: "1:45488634218:web:53a20cb172d391c7f34d13"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const provider = new GoogleAuthProvider();
export {auth,db,provider};