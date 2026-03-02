// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhMw4-tEqIVAs_60rZO-o--QOH8hinbg8",
  authDomain: "finease-4ff64.firebaseapp.com",
  projectId: "finease-4ff64",
  storageBucket: "finease-4ff64.firebasestorage.app",
  messagingSenderId: "26205988081",
  appId: "1:26205988081:web:119dab183babf06d4ef550"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);