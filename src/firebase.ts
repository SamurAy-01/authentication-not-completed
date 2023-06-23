// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7PreeK8r72YZ5YJrGUmF78CP1mM29LbA",
  authDomain: "i-hate-f5164.firebaseapp.com",
  projectId: "i-hate-f5164",
  storageBucket: "i-hate-f5164.appspot.com",
  messagingSenderId: "960906372833",
  appId: "1:960906372833:web:abc55950f8797b3766b9a0",
  measurementId: "G-TJBMY7HH0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;