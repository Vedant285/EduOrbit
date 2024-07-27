// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0Aj0MO_RC9mTJe-BVbZvCX7at0anTi5Q",
  authDomain: "eduorbit-ccbb0.firebaseapp.com",
  projectId: "eduorbit-ccbb0",
  storageBucket: "eduorbit-ccbb0.appspot.com",
  messagingSenderId: "493346251096",
  appId: "1:493346251096:web:61b1e728fbef8dc8ec052d",
  measurementId: "G-3Z55HV17C6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);