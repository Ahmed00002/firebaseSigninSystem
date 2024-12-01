// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7hQPnG4YQSTsLZLkTKIGo4jxrcltewJ8",
  authDomain: "first-webproject-f3921.firebaseapp.com",
  projectId: "first-webproject-f3921",
  storageBucket: "first-webproject-f3921.firebasestorage.app",
  messagingSenderId: "348676282904",
  appId: "1:348676282904:web:a97eb7cc3033dd87a3016d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
