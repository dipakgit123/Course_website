// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB1NMY3ClsZblmgJJwTsb7uW2UfUMKfIIE",
  authDomain: "course-7305a.firebaseapp.com",
  projectId: "course-7305a",
  storageBucket: "course-7305a.appspot.com",
  messagingSenderId: "610820814429",
  appId: "1:610820814429:web:b41dda083ad59617baffb4",
  measurementId: "G-QFGX5KW3BT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth, provider}
