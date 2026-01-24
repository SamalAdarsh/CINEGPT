// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUvUh3_OBs_wmW5ZUq5BGe20xiTQh52Mk",
  authDomain: "cinegpt-e4bd7.firebaseapp.com",
  projectId: "cinegpt-e4bd7",
  storageBucket: "cinegpt-e4bd7.firebasestorage.app",
  messagingSenderId: "708833916885",
  appId: "1:708833916885:web:f75a9e5abada32598a2f5c",
  measurementId: "G-ZEYGHJMJRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);