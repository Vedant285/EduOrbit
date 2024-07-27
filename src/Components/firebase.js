// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnVnFeBySCP-nkcghfK_oZPCDYyJ8Ow2M",
  authDomain: "eduorbit-42559.firebaseapp.com",
  projectId: "eduorbit-42559",
  storageBucket: "eduorbit-42559.appspot.com",
  messagingSenderId: "326964123258",
  appId: "1:326964123258:web:4885a1602c842e4bd0cdc3",
  measurementId: "G-3NG5V136Z1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);