import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import App from "../App";

const firebaseConfig = {
  apiKey: "AIzaSyAMDU9BnYeKeDluDcuhw7HlG04UaUFNETU",
  authDomain: "matrixwebsolution-9ab30.firebaseapp.com",
  projectId: "matrixwebsolution-9ab30",
  storageBucket: "matrixwebsolution-9ab30.firebasestorage.app",
  messagingSenderId: "643537905094",
  appId: "1:643537905094:web:a78b2a9985f5fbaed67ec7",
  measurementId: "G-EKCPEQG0LT",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize auth using the Firebase app instance
export const auth = getAuth(app);

export default app;
