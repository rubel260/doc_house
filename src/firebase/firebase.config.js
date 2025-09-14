// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZQeVMJazrXvFOpDTV5SEOYqOg8IET5HQ",
  authDomain: "dochouse-6a7ad.firebaseapp.com",
  projectId: "dochouse-6a7ad",
  storageBucket: "dochouse-6a7ad.firebasestorage.app",
  messagingSenderId: "87723815172",
  appId: "1:87723815172:web:234e290771a58882b72051",
  measurementId: "G-E90XEEVB6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);