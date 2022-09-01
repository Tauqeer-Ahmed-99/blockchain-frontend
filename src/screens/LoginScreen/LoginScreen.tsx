import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import CryptoLogo from "../../assets/icons/cryptowall-logo.svg";

import "./loginscreen.css";

const LoginScreen = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);

  const navigate = useNavigate();

  const birtDateRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleClick = () => {
    if (!isSigningUp) {
      sessionStorage.setItem("accessToken", "true");
      navigate("/dashboard");
    } else {
    }
  };

  return (
    <div className="login-signup">
      <div className="login-screen">
        <div className="cryptowall-logo">
          <img src={CryptoLogo} alt={"Crypto logo"} />
          <div>Cryptowall</div>
        </div>
        <div className="inputs">
          <input
            className="username-field"
            type="text"
            placeholder="Username"
          />
          <input
            className="password-field"
            type="password"
            placeholder="Password"
          />
          {isSigningUp ? (
            <>
              <input
                className="password-field"
                type="password"
                placeholder="Confirm password"
              />
              <input
                className="birth-date-field"
                type="text"
                ref={birtDateRef}
                placeholder="Date of birth"
                onFocus={() => (birtDateRef.current.type = "date")}
                onBlur={() => (birtDateRef.current.type = "text")}
              />
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="action">
          <button onClick={handleClick}>
            {!isSigningUp ? "Login" : "Signup"}
          </button>
        </div>
        <div
          onClick={() => setIsSigningUp((prevState) => !prevState)}
          className="question"
        >
          {!isSigningUp
            ? "Don't have an account? Signup instead."
            : "Already have an account? Login instead."}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
