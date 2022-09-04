import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import CryptoLogo from "../../assets/icons/cryptowall-logo.svg";
import CircularLoader from "../../components/CircularLoader/CircularLoader";
import Dialog from "../../components/Dialog/Dialog";
import UserContext from "../../context/UserContext/UserContext";
import CloseIcon from "../../assets/icons/close.svg";

import "./loginscreen.css";
import { User } from "firebase/auth";

const LoginScreen = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);

  const [formValues, setFormValues] = useState({
    userName: "",
    confirmUserName: "",
    userEmail: "",
    confirmUserEmail: "",
    userPassword: "",
    confirmUserPassword: "",
    userBirthDate: "",
    userGender: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const userContext = useContext(UserContext);

  const navigate = useNavigate();

  const birthDateRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleClick = () => {
    if (!isSigningUp) {
      userContext.login(formValues.userEmail, formValues.userPassword);
    } else {
      userContext.createAccount(
        formValues.userEmail,
        formValues.userPassword,
        formValues.userName,
        formValues.userBirthDate
      );
    }
  };

  const closeMessageBox = () => {
    userContext.closeMessageBox();
  };

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      userContext.loadUser(parsedUser as User);

      navigate("/dashboard");
    }
  }, [navigate, userContext]);

  return (
    <div className="login-signup">
      {userContext.state.isLoading && (
        <Dialog open>
          <div className="loading-dialog-box">
            <span>
              <CircularLoader />
            </span>
            <span>{userContext.state.loadingMessage}</span>
          </div>
        </Dialog>
      )}

      <Dialog open={userContext.state.isError} onClose={closeMessageBox}>
        <div className="dialog-header">
          <h3>Message</h3>
          <img src={CloseIcon} alt="close" onClick={closeMessageBox} />
        </div>
        <div className="dialog-content">
          {userContext.state.errorMessage.errorMessage}
        </div>
        <div className="dialog-actions">
          <button onClick={closeMessageBox}>Close</button>
        </div>
      </Dialog>

      <div className="login-screen">
        <div className="cryptowall-logo">
          <img src={CryptoLogo} alt={"Crypto logo"} />
          <div>Cryptowall</div>
        </div>
        <div className={`inputs${isSigningUp ? " space" : ""}`}>
          {isSigningUp && (
            <div className="username-group">
              <input
                name="userName"
                className="username-field"
                type="text"
                placeholder="Username"
                value={formValues.userName}
                onChange={handleInputChange}
              />
              <input
                name="confirmUserName"
                className="username-field"
                type="text"
                placeholder="Confirm Username"
                value={formValues.confirmUserName}
                onChange={handleInputChange}
              />
            </div>
          )}
          <div className="email-group">
            <input
              name="userEmail"
              className="email-field"
              type="email"
              placeholder="Email"
              value={formValues.userEmail}
              onChange={handleInputChange}
            />
            {isSigningUp && (
              <input
                name="confirmUserEmail"
                className="confirm email-field"
                type="email"
                placeholder="Confirm Email"
                value={formValues.confirmUserEmail}
                onChange={handleInputChange}
              />
            )}
          </div>
          <div className="password-group">
            <input
              name="userPassword"
              className="password-field"
              type="password"
              placeholder="Password"
              value={formValues.userPassword}
              onChange={handleInputChange}
            />
            {isSigningUp && (
              <>
                <input
                  name="confirmUserPassword"
                  className="password-field"
                  type="password"
                  placeholder="Confirm password"
                  value={formValues.confirmUserPassword}
                  onChange={handleInputChange}
                />
              </>
            )}
          </div>
          {isSigningUp && (
            <div>
              <input
                name="userBirthDate"
                className="birth-date-field"
                type="text"
                ref={birthDateRef}
                placeholder="Date of birth"
                onFocus={() => (birthDateRef.current.type = "date")}
                onBlur={() => (birthDateRef.current.type = "text")}
                value={formValues.userBirthDate}
                onChange={handleInputChange}
              />
            </div>
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
