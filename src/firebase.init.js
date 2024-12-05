// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAukUbMfvmcQL3jpN-4oYXgA66eBjdaMM8",
  authDomain: "fund-me-81daf.firebaseapp.com",
  projectId: "fund-me-81daf",
  storageBucket: "fund-me-81daf.firebasestorage.app",
  messagingSenderId: "139993292114",
  appId: "1:139993292114:web:c760992c1e72df86feee8b",
  measurementId: "G-WS9LE7EM19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
