// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmXom3x6pv1BoDkS4cMcBct8GS9hzd1ZI",
  authDomain: "edu-tech-e2e47.firebaseapp.com",
  projectId: "edu-tech-e2e47",
  storageBucket: "edu-tech-e2e47.appspot.com",
  messagingSenderId: "853137990150",
  appId: "1:853137990150:web:2aad3d5651049fc1a25987"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
