import React, { useRef } from "react";

import "./profileupdateform.css";

const ProfileUpdateForm = () => {
  const birthDateRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <div className="profile-update-form">
      <div className="username-fields">
        <div>
          <label>Username</label>
          <input className="username" placeholder="Enter Username" />
        </div>
        <div>
          <label>Confirm Username</label>
          <input className="confirm-username" placeholder="Confirm Username" />
        </div>
      </div>
      <div className="email-fields">
        <div>
          <label>Email</label>
          <input className="email" placeholder="Enter Email" />
        </div>
        <div>
          <label>Confirm Email</label>
          <input className="confirm-email" placeholder="Confirm Email" />
        </div>
      </div>
      <div className="password-fields">
        <div>
          <label>Password</label>
          <input className="password" placeholder="Enter password" />
        </div>
        <div>
          <label>Confirm Password</label>
          <input className="confirm-password" placeholder="Confirm Username" />
        </div>
      </div>
      <div className="birthdate-group">
        <div>
          <label>Date of birth</label>
          <input
            className="birthdate-field"
            type="text"
            ref={birthDateRef}
            placeholder="Date of birth"
            onFocus={() => (birthDateRef.current.type = "date")}
            onBlur={() => (birthDateRef.current.type = "text")}
          />
        </div>
        <input style={{ visibility: "hidden" }} className="birthdate-field" />
      </div>
    </div>
  );
};

export default ProfileUpdateForm;
