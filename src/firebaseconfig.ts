// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb1x92-HmkKSx1P0KQy_fV2SLqt1FyUHs",
  authDomain: "microservicios-lmh.firebaseapp.com",
  databaseURL: "https://microservicios-lmh-default-rtdb.firebaseio.com",
  projectId: "microservicios-lmh",
  storageBucket: "microservicios-lmh.appspot.com",
  messagingSenderId: "801337441034",
  appId: "1:801337441034:web:fe95e65f1354bc21b358f3",
  measurementId: "G-0RC6KZ7NMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
