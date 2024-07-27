// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC15hqfX95yI9Bvu6QVcrL2z_GA_4gI_a8",
  authDomain: "eduo-df84e.firebaseapp.com",
  projectId: "eduo-df84e",
  storageBucket: "eduo-df84e.appspot.com",
  messagingSenderId: "644360352570",
  appId: "1:644360352570:web:12083c1024f33ffb631603",
  measurementId: "G-G0R7KYYSL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);