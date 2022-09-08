import React, { useContext, useRef } from "react";
import useForm from "../../custom_hooks/useForm";
import Dialog from "../Dialog/Dialog";

import "./profileupdateform.css";
import CloseIcon from "../../assets/icons/close.svg";
import UserContext from "../../context/UserContext/UserContext";
import CircularLoader from "../CircularLoader/CircularLoader";

type UserDetails = {
  userName: string | null | undefined;
  userEmail: string | null | undefined;
  userBirthDate: string | null | undefined;
};

const ProfileUpdateForm = ({
  userDetails,
  isConfirmationOpen,
  closeConfirmationBox,
}: {
  userDetails: UserDetails;
  isConfirmationOpen: boolean;
  closeConfirmationBox: () => void;
}) => {
  const initialValues = {
    userName: userDetails.userName ?? "",
    confirmUserName: userDetails.userName ?? "",
    userEmail: userDetails.userEmail ?? "",
    confirmUserEmail: userDetails.userEmail ?? "",
    userPassword: "",
    confirmUserPassword: "",
    userBirthDate: userDetails.userBirthDate ?? "",
  };

  const [formValues, fieldErrors, handleInputChange, handleInputBlur] =
    useForm(initialValues);

  const birthDateRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const userContext = useContext(UserContext);

  const updateUserDetails = () => {
    userContext.updateUser(
      formValues.userEmail,
      formValues.userPassword,
      formValues.userName
    );
    closeConfirmationBox();
  };

  return (
    <div className="profile-update-form">
      <Dialog open={userContext.state.isLoading}>
        <div className="loading">
          <CircularLoader />
          {"   "}
          {userContext.state.message}
        </div>
      </Dialog>
      <Dialog open={isConfirmationOpen} onClose={closeConfirmationBox}>
        <div className="dialog-header">
          <h3>Are you sure?</h3>
          <img src={CloseIcon} alt="close" onClick={closeConfirmationBox} />
        </div>
        <div className="dialog-content">
          Do you really want to update user details?
        </div>
        <div className="dialog-actions">
          <button onClick={updateUserDetails}>Yes</button>
          <button onClick={closeConfirmationBox}>No</button>
        </div>
      </Dialog>
      <div className="username-fields">
        <div className="error-parent">
          <label>Username</label>
          <input
            name="userName"
            className="username"
            placeholder="Enter Username"
            value={formValues.userName}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {fieldErrors.userName && (
            <span className="error-field-msg">
              {!formValues.userName
                ? "Username is required."
                : "Username must be atleast 4 characters long."}
            </span>
          )}
        </div>
        <div className="error-parent">
          <label>Confirm Username</label>
          <input
            name="confirmUserName"
            className="confirm-username"
            placeholder="Confirm Username"
            value={formValues.confirmUserName}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {fieldErrors.confirmUserName && (
            <span className="error-field-msg">Username do not match.</span>
          )}
        </div>
      </div>
      <div className="email-fields">
        <div className="error-parent">
          <label>Email</label>
          <input
            name="userEmail"
            className="email"
            placeholder="Enter Email"
            value={formValues.userEmail}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {fieldErrors.userEmail && (
            <span className="error-field-msg">Please enter a valid email.</span>
          )}
        </div>
        <div className="error-parent">
          <label>Confirm Email</label>
          <input
            name="confirmUserEmail"
            className="confirm-email"
            placeholder="Confirm Email"
            value={formValues.confirmUserEmail}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {fieldErrors.confirmUserEmail && (
            <span className="error-field-msg">Email do not match.</span>
          )}
        </div>
      </div>
      <div className="password-fields">
        <div className="error-parent">
          <label>Password</label>
          <input
            disabled
            name="userPassword"
            className="password"
            placeholder="Enter password"
            value={formValues.userPassword}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {fieldErrors.userPassword && (
            <span className="error-field-msg">
              {formValues.userPassword.length < 8
                ? "Password must be 8 characters long."
                : "Password is required."}
            </span>
          )}
        </div>
        <div className="error-parent">
          <label>Confirm Password</label>
          <input
            disabled
            name="confirmUserPassword"
            className="confirm-password"
            placeholder="Confirm Username"
            value={formValues.confirmUserPassword}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {fieldErrors.confirmUserPassword && (
            <span className="error-field-msg">Password do not match.</span>
          )}
        </div>
      </div>
      <div className="birthdate-group">
        <div className="error-parent">
          <label>Date of birth</label>
          <input
            disabled
            name="userBirthDate"
            className="birthdate-field"
            type="text"
            ref={birthDateRef}
            placeholder="Date of birth"
            onFocus={() => (birthDateRef.current.type = "date")}
            onBlur={(event) => {
              birthDateRef.current.type = "text";
              handleInputBlur(event);
            }}
            value={formValues.userBirthDate}
            onChange={handleInputChange}
          />
          {fieldErrors.userBirthDate && (
            <span className="error-field-msg">Birth date is required.</span>
          )}
        </div>
        <input style={{ visibility: "hidden" }} className="birthdate-field" />
      </div>
    </div>
  );
};

export default ProfileUpdateForm;
