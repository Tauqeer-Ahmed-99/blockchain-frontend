import React, { useState } from "react";

import "./profile.css";
import ProfileDetails from "./ProfileDetails";
import ProfileUpdateForm from "./ProfileUpdateForm";

const Profile = () => {
  const [isProfileUpdating, setIsProfileUpdating] = useState(false);
  return (
    <div className="profile">
      <header className="profile-header">
        <div>
          <div className="profile-heading-text">My Profile</div>
          <div className="profile-user-name">Tauqeer Khan</div>
        </div>
        <div>
          <button
            className="profile-action"
            onClick={() => {
              setIsProfileUpdating((prevState) => !prevState);
            }}
          >
            {isProfileUpdating ? "Cancel" : "Edit Profile"}
          </button>
        </div>
      </header>
      <main className="profile-content">
        {isProfileUpdating ? <ProfileUpdateForm /> : <ProfileDetails />}
      </main>
      {isProfileUpdating ? (
        <div className="profile-actions-footer">
          <button>Save</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Profile;
