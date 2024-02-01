// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogapp-2c10a.firebaseapp.com",
  projectId: "blogapp-2c10a",
  storageBucket: "blogapp-2c10a.appspot.com",
  messagingSenderId: "477640555615",
  appId: "1:477640555615:web:3cd2e49de191d9277e6fea",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);