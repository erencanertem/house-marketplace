import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYxNV8PPXsBkR5PwJDu3LjRmjs1PV7e1s",
  authDomain: "house-marketplace-app-46a78.firebaseapp.com",
  projectId: "house-marketplace-app-46a78",
  storageBucket: "house-marketplace-app-46a78.appspot.com",
  messagingSenderId: "1061593000066",
  appId: "1:1061593000066:web:77b6aa4a944a06675eec9b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();