import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = ({ onForgotPassword, onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
  };
//   const Clicker=()=>{
//     <Link to="/"></Link>
//   }

  return (
    <div className="auth-form">
      <h2>Welcome back!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}

          />
        </div>
        <Link to="/"><button type="submit" className="btn-main">Login</button></Link>
      </form>
      <div className="form-footer">
        <a href="#" onClick={onForgotPassword} className="btn-main2">Forgot Password?</a>
        <a href="#" onClick={onRegister} className="btn-main2">Register</a>
      </div>
    </div>
  );
};

const ForgotPassword = ({ onBack }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset requested for:", email);
  };

  return (
    <div className="auth-form">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="reset-email">Email:</label>
          <input
            type="email"
            id="reset-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
        </div>
        <Link to="/"><button type="submit" className="btn-main">Reset Password</button></Link>
      </form>
      <div className="form-footer">
        <a href="#" onClick={onBack} className="btn-main2" >Back to Login</a>
      </div>
    </div>
  );
};

const Register = ({ onBack }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registration attempt with:", { name, email, password });
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}

          />
        </div>
        <div className="form-group">
          <label htmlFor="reg-email">Email:</label>
          <input
            type="email"
            id="reg-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
        </div>
        <div className="form-group">
          <label htmlFor="reg-password">Password:</label>
          <input
            type="password"
            id="reg-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}

          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}

          />
        </div>
        <Link to="/"><button type="submit" className="btn-main">Register</button></Link>
      </form>
      <div className="form-footer">
        <a href="#" onClick={onBack} className="btn-main2">Back to Login</a>
      </div>
    </div>
  );
};

const Auth = () => {
  const [currentView, setCurrentView] = useState("login");
  const scrollPosRef = useRef(0); // Store scroll position

  useEffect(() => {
    // Save scroll position when the view changes
    const handleBeforeViewChange = () => {
      scrollPosRef.current = window.scrollY;
    };

    // Restore scroll position after the view changes
    const handleAfterViewChange = () => {
      window.scrollTo(0, scrollPosRef.current);
    };

    handleAfterViewChange(); // Restore scroll position on component load

    return () => {
      handleBeforeViewChange();
    };
  }, [currentView]);

  return (
    <div className="Login-container">
    <div className="auth-container">
      <div className={`auth-card ${currentView !== "login" ? "flipped" : ""}`}>
        <div className="card-front">
          <Login
            onForgotPassword={() => setCurrentView("forgotPassword")}
            onRegister={() => setCurrentView("register")}
          />
        </div>
        <div className="card-back">
          {currentView === "forgotPassword" && (
            <ForgotPassword onBack={() => setCurrentView("login")} />
          )}
          {currentView === "register" && (
            <Register onBack={() => setCurrentView("login")} />
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Auth;
