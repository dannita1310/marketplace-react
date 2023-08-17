import React, { useState } from "react";
import "./styles.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your login logic here
  };

  return (
    <div className="login">
      <div className="form-container">
        <p className="title">Login</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder=""
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=""
            />
            <div className="forgot">
              <a rel="noopener noreferrer" href="#">
                Forgot Password ?
              </a>
            </div>
          </div>
          <button className="sign" type="submit">
            Sign in
          </button>
        </form>
        <div className="social-message">
          <div className="line"></div>
          <p className="message">Login with social accounts</p>
          <div className="line"></div>
        </div>
        <div className="social-icons">
          <button aria-label="Log in with Google" className="icon">
            {/* Google SVG */}
          </button>
          <button aria-label="Log in with Twitter" className="icon">
            {/* Twitter SVG */}
          </button>
          <button aria-label="Log in with GitHub" className="icon">
            {/* GitHub SVG */}
          </button>
        </div>
        <p className="signup">
          Don't have an account?{" "}
          <a rel="noopener noreferrer" href="#">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
export default LoginForm;
