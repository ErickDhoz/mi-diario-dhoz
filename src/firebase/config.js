// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYCrH855FhtDuu10r9Ojx_7EW5GvhPl8w",
  authDomain: "journalapp-9ed94.firebaseapp.com",
  projectId: "journalapp-9ed94",
  storageBucket: "journalapp-9ed94.firebasestorage.app",
  messagingSenderId: "825992634066",
  appId: "1:825992634066:web:cbf0a6ecf7df817d65570b",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
