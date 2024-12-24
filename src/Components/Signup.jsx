import React, { useContext, useState } from "react";
import "../styles/Signup.css";
import { Link } from "react-router-dom";
import Store from "../Store/ContextAPI";

function Signup() {
  const { Authorization, error, email, setEmail, password, setPassword } =
    useContext(Store);

  return (
    <center className="d-flex justify-content-center align-items-center">
      <form className="form" onSubmit={Authorization}>
        <p className="form-title">Create an account</p>
        <div className="input-container">
          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <span></span>
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit">
          Sign up
        </button>
        {error && <span className="text-danger fs-6">{error}</span>}
        <p className="signup-link">
          Have an account?
          <Link to="/loginpage">Login</Link>
        </p>
      </form>
    </center>
  );
}

export default Signup;
