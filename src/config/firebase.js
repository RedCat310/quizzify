// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyATaH2MvK5Ngq6y5kXd24quHFSzuJuKxgQ",
  authDomain: "quizzify-b338a.firebaseapp.com",
  projectId: "quizzify-b338a",
  storageBucket: "quizzify-b338a.firebasestorage.app",
  messagingSenderId: "449424616643",
  appId: "1:449424616643:web:dac3afce5770810a9f0676"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const google = new GoogleAuthProvider()

export {auth, db, google}