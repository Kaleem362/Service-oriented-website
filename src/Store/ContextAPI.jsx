import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/config";
import HeroImage from "../images/Hero_image.jpg";
import HeroPlateImage from "../images/HeroPlaterimage.jpg";

const Store = createContext();

export const StoreProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle login
  const userLogIn = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Home"); // Redirect to Home on successful login
    } catch (err) {
      handleError(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle signup
  const Authorization = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/Home"); // Redirect to Home on successful signup
      setEmail("");
      setPassword("");
    } catch (err) {
      handleError(err);
    }
  };

  // Handle logout
  const userLogOut = async () => {
    try {
      await signOut(auth);
      navigate("/LoginPage"); // Redirect to LoginPage on logout
      setTimeout(() => {
        alert("Successfully Logged out");
      }, 2000);
    } catch (err) {
      console.error("Error logging out: ", err);
    }
  };

  // Helper function to handle errors
  const handleError = (err) => {
    if (err.code === "auth/user-not-found") {
      setError("User not found.");
    } else if (err.code === "auth/wrong-password") {
      setError("Incorrect password.");
    } else if (err.code === "auth/invalid-email") {
      setError("Invalid email format.");
    } else if (err.code === "auth/email-already-in-use") {
      setError("Email already in use.");
    } else if (err.code === "auth/weak-password") {
      setError("Password should be at least 6 characters.");
    } else {
      setError("An error occurred. Please try again.");
    }
  };

  // Persist user on site revisit using Firebase auth state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // Check if the user is authenticated
      if (currentUser) {
        // If the user is already logged in, redirect them to "/Home", but only if they are not already there
        if (window.location.pathname !== "/home") {
          navigate("/Home");
        }
      } else {
        // If no user, allow access to Login and Signup pages, and prevent redirection to LoginPage when already on LoginPage
        if (
          window.location.pathname !== "/loginpage" &&
          window.location.pathname !== "/signup"
        ) {
          navigate("/LoginPage");
        }
      }
    });

    // Cleanup the observer when the component unmounts
    return () => unsubscribe();
  }, [navigate]);

  return (
    <Store.Provider
      value={{
        isSubmitting,
        error,
        email,
        password,
        setEmail,
        setPassword,
        userLogIn,
        userLogOut,
        Authorization,
        user,
        HeroImage,
        HeroPlateImage,
        message,
        setMessage,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export default Store;
