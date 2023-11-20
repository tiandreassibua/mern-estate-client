// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-f3d7a.firebaseapp.com",
    projectId: "mern-estate-f3d7a",
    storageBucket: "mern-estate-f3d7a.appspot.com",
    messagingSenderId: "1025187025563",
    appId: "1:1025187025563:web:3c6ea9e51a6980d701ec3e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
