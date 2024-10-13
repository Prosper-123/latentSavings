import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyB-vqsKECM2VuRkBjVDGI-jNacB1vT-5YI",
  authDomain: "latentsavings.firebaseapp.com",
  databaseURL: "https://latentsavings-default-rtdb.firebaseio.com",
  projectId: "latentsavings",
  storageBucket: "latentsavings.appspot.com",
  messagingSenderId: "465627389946",
  appId: "1:465627389946:web:7894df37f89cb115d4ce43",
  measurementId: "G-0K7FM61TDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it for use in your screens
export const auth = getAuth(app);


