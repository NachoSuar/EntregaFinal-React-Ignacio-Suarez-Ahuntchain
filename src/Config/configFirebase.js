// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp6hOUn2MRJjXucICSa_vvYLhYTTanDLw",
  authDomain: "coderhouce-ecommerce.firebaseapp.com",
  projectId: "coderhouce-ecommerce",
  storageBucket: "coderhouce-ecommerce.appspot.com",
  messagingSenderId: "390665998176",
  appId: "1:390665998176:web:a99a6f6b2ab3b726629805"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
