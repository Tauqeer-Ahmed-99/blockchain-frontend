import React, { useContext, useRef, useState } from "react";

import CryptoLogo from "../../assets/icons/cryptowall-logo.svg";
import CircularLoader from "../../components/CircularLoader/CircularLoader";
import Dialog from "../../components/Dialog/Dialog";
import UserContext from "../../context/UserContext/UserContext";
import CloseIcon from "../../assets/icons/close.svg";

import "./loginscreen.css";
import useForm from "../../custom_hooks/useForm";

const LoginScreen = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);

  const initialValues = {
    userName: "",
    confirmUserName: "",
    userEmail: "",
    confirmUserEmail: "",
    userPassword: "",
    confirmUserPassword: "",
    userBirthDate: "",
  };

  const [
    formValues,
    fieldErrors,
    handleInputChange,
    handleInputBlur,
    resetForm,
  ] = useForm(initialValues);

  const userContext = useContext(UserContext);

  const birthDateRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleClick = () => {
    const isFormHasAnyError = Object.values(fieldErrors).some(
      (isError) => isError
    );

    if (!isSigningUp) {
      if (!fieldErrors.userEmail && !fieldErrors.userPassword) {
        userContext.login(formValues.userEmail, formValues.userPassword);
      }
    } else {
      if (!isFormHasAnyError) {
        userContext.createAccount(
          formValues.userEmail,
          formValues.userPassword,
          formValues.userName,
          formValues.userBirthDate
        );
      }
    }
  };

  const handleQuestionClick = () => {
    setIsSigningUp((prevState) => !prevState);
    resetForm();
  };

  const closeMessageBox = () => {
    userContext.closeMessageBox();
  };

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
                onBlur={handleInputBlur}
              />
              {fieldErrors.userName && (
                <span className="error-msg">
                  {formValues.userName.length < 4
                    ? "Username must be 4 characters long."
                    : "Username is required."}
                </span>
              )}
              <input
                name="confirmUserName"
                className="username-field"
                type="text"
                placeholder="Confirm Username"
                value={formValues.confirmUserName}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {fieldErrors.confirmUserName && (
                <span className="error-msg confirm">
                  Username do not match.
                </span>
              )}
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
              onBlur={handleInputBlur}
            />
            {fieldErrors.userEmail && (
              <span className={`error-msg ${!isSigningUp ? "normal" : ""}`}>
                Please enter a valid email.
              </span>
            )}
            {isSigningUp && (
              <>
                <input
                  name="confirmUserEmail"
                  className="confirm email-field"
                  type="email"
                  placeholder="Confirm Email"
                  value={formValues.confirmUserEmail}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                />
                {fieldErrors.confirmUserEmail && (
                  <span className="error-msg confirm">Email do not match.</span>
                )}
              </>
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
              onBlur={handleInputBlur}
            />
            {fieldErrors.userPassword && (
              <span className={`error-msg ${!isSigningUp ? "normal" : ""}`}>
                {formValues.userPassword.length < 8
                  ? "Password must be 8 characters long."
                  : "Password is required."}
              </span>
            )}
            {isSigningUp && (
              <>
                <input
                  name="confirmUserPassword"
                  className="password-field"
                  type="password"
                  placeholder="Confirm password"
                  value={formValues.confirmUserPassword}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                />
                {fieldErrors.confirmUserPassword && (
                  <span className="error-msg confirm">
                    Password do not match.
                  </span>
                )}
              </>
            )}
          </div>
          {isSigningUp && (
            <div className="birthDate-group">
              <input
                name="userBirthDate"
                className="birth-date-field"
                type="text"
                ref={birthDateRef}
                placeholder="Date of birth"
                onFocus={() => (birthDateRef.current.type = "date")}
                onBlur={(e) => {
                  birthDateRef.current.type = "text";
                  handleInputBlur(e);
                }}
                value={formValues.userBirthDate}
                onChange={handleInputChange}
              />
              {fieldErrors.userBirthDate && (
                <span className="error-msg">Birth date is required.</span>
              )}
            </div>
          )}
        </div>
        <div className="action">
          <button onClick={handleClick}>
            {!isSigningUp ? "Login" : "Signup"}
          </button>
        </div>
        <div onClick={handleQuestionClick} className="question">
          {!isSigningUp
            ? "Don't have an account? Signup instead."
            : "Already have an account? Login instead."}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
