// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAME5yU2_2i0B4qIaVyZvPMbCRKxMev28",
  authDomain: "netflixgpt-c3783.firebaseapp.com",
  projectId: "netflixgpt-c3783",
  storageBucket: "netflixgpt-c3783.appspot.com",
  messagingSenderId: "734713900911",
  appId: "1:734713900911:web:97e249ba9fb4b676f8829a",
  measurementId: "G-K7GW8FD4DQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);