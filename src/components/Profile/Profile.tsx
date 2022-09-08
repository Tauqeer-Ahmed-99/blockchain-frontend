import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext/UserContext";

import "./profile.css";
import ProfileDetails from "./ProfileDetails";
import ProfileUpdateForm from "./ProfileUpdateForm";

const Profile = () => {
  const [isProfileUpdating, setIsProfileUpdating] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const userContext = useContext(UserContext);

  const userDetails = {
    userName: userContext.state.user?.displayName,
    userEmail: userContext.state.user?.email,
    userBirthDate: userContext.state.user?.photoURL,
  };

  const handleSaveClick = () => {
    setIsConfirmationOpen(true);
  };

  const closeConfirmationBox = () => {
    setIsConfirmationOpen(false);
  };

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
        {isProfileUpdating ? (
          <ProfileUpdateForm
            userDetails={userDetails}
            isConfirmationOpen={isConfirmationOpen}
            closeConfirmationBox={closeConfirmationBox}
          />
        ) : (
          <ProfileDetails userDetails={userDetails} />
        )}
      </main>
      {isProfileUpdating && (
        <div className="profile-actions-footer">
          <button onClick={handleSaveClick}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
