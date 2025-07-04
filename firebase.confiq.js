// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB7EUOrdDFDvZIWlvpxKRTIEvUu-RIQlA",
  authDomain: "fullstack-ecommerce-70d30.firebaseapp.com",
  projectId: "fullstack-ecommerce-70d30",
  storageBucket: "fullstack-ecommerce-70d30.firebasestorage.app",
  messagingSenderId: "353733402965",
  appId: "1:353733402965:web:b8965137af2bbec1d50fdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);