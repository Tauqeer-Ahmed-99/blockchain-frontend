import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import CryptoLogo from "../../assets/icons/cryptowall-logo.svg";
import CircularLoader from "../../components/CircularLoader/CircularLoader";
import Dialog from "../../components/Dialog/Dialog";
import UserContext from "../../context/UserContext/UserContext";
import CloseIcon from "../../assets/icons/close.svg";
import { User } from "firebase/auth";
import { emailRegex } from "../utilities/utils";

import "./loginscreen.css";

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
  const [fieldErrors, setFieldErrors] = useState({
    userName: false,
    confirmUserName: false,
    userEmail: false,
    confirmUserEmail: false,
    userPassword: false,
    confirmUserPassword: false,
    userBirthDate: false,
  });
  const [event, setEvent] =
    useState<React.ChangeEvent<HTMLInputElement> | null>(null);

  const userContext = useContext(UserContext);

  const navigate = useNavigate();

  const birthDateRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const verifyEmail = (email: string) => {
    return emailRegex.test(email);
  };

  const validateForm = useCallback(
    (
      event:
        | React.FocusEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLInputElement>,
      checkForMatch = false
    ) => {
      const errors: {
        [key: string]: boolean;
      } = {
        userName: !(formValues.userName.length >= 4),
        confirmUserName:
          formValues.userName !== formValues.confirmUserName ||
          !formValues.confirmUserName,
        userEmail: !verifyEmail(formValues.userEmail),
        confirmUserEmail:
          formValues.userEmail !== formValues.confirmUserEmail ||
          !formValues.confirmUserEmail,
        userPassword: formValues.userPassword.length <= 7,
        confirmUserPassword:
          formValues.userPassword !== formValues.confirmUserPassword ||
          !formValues.confirmUserPassword,
        userBirthDate:
          new Date(formValues.userBirthDate).getFullYear() <=
            new Date().getFullYear() - 18 || !formValues.userBirthDate,
      };

      if (checkForMatch) {
        const confirmFieldName =
          event.target.name.charAt(0).toUpperCase() +
          event.target.name.slice(1);
        setFieldErrors((prevState) => ({
          ...prevState,
          [event.target.name]: errors[event.target.name],
          [`confirm${confirmFieldName}`]: errors[`confirm${confirmFieldName}`],
        }));
      }

      setFieldErrors((prevState) => ({
        ...prevState,
        [event.target.name]: errors[event.target.name],
      }));
    },
    [
      formValues.confirmUserEmail,
      formValues.confirmUserName,
      formValues.confirmUserPassword,
      formValues.userBirthDate,
      formValues.userEmail,
      formValues.userName,
      formValues.userPassword,
    ]
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
    setEvent(event);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    validateForm(event);
  };

  const handleClick = () => {
    const isFormHasAnyError = Object.values(fieldErrors).some(
      (isError) => isError
    );

    if (!isFormHasAnyError) {
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

  useEffect(() => {
    if (event) {
      validateForm(event, true);
    }
  }, [formValues, event, validateForm]);

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
