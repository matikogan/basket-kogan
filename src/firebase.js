// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjlGlwcBVtoONgXdeRDDMV07DKI-bULaM",
  authDomain: "basketball-ecommerce-832b2.firebaseapp.com",
  projectId: "basketball-ecommerce-832b2",
  storageBucket: "basketball-ecommerce-832b2.appspot.com",
  messagingSenderId: "154357160997",
  appId: "1:154357160997:web:779b08c51817aaf6f233cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;