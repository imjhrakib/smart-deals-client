// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkNLp3HcpCmUVsCWd2y6Vb2RK5MqCJzls",
  authDomain: "smart-deals-1da76.firebaseapp.com",
  projectId: "smart-deals-1da76",
  storageBucket: "smart-deals-1da76.firebasestorage.app",
  messagingSenderId: "725541743755",
  appId: "1:725541743755:web:c03f6fb829e6d1dca9788e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
