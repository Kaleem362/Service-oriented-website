import React, { useContext, useState } from "react";
import "../styles/Loginpage.css";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
import Store from "../Store/ContextAPI";

const LoginPage = () => {
  const {
    userLogIn,
    error,
    setError,
    isSubmitting,
    setEmail,
    setPassword,
    email,
    password,
    message,
    setMessage,
  } = useContext(Store);

  const handlePasswordReset = async () => {
    setError(null); // Reset error state
    setMessage(""); // Reset message state

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Please check your inbox.");
      alert("Password Reset link is successfully");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      setMessage("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <div className="login-card">
      <div className="card-header">
        <div className="log">Login</div>
      </div>
      <form onSubmit={userLogIn}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            required
            name="email"
            id="email"
            type="text"
            placeholder="Your Email..."
            className="input-style"
            onChange={(e) => {
              setEmail(e.target.value);
              setError(null); // Clear error on new input
            }}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            required
            name="password"
            id="password"
            type="password"
            placeholder="Enter Password..."
            className="input-style"
            onChange={(e) => {
              setPassword(e.target.value);
              setError(null); // Clear error on new input
            }}
            value={password}
          />
        </div>
        <div className="form-group text-center">
          <input value="Login" type="submit" disabled={isSubmitting} />
        </div>
        {error && (
          <span
            className="text-danger text-center"
            style={{ fontSize: "12px" }}
          >
            {error}
          </span>
        )}
        {message && <span className="text-success">{message}</span>}
        <p className="text-center">
          Don’t have an account? <Link to="/signup">Signup</Link>
        </p>

        <p onClick={handlePasswordReset} className="text-center text-underline">
          Forgot password
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
