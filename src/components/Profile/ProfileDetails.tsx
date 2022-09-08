import React from "react";

import "./profiledetails.css";

type UserDetails = {
  userName: string | null | undefined;
  userEmail: string | null | undefined;
  userBirthDate: string | null | undefined;
};

const ProfileDetails = ({ userDetails }: { userDetails: UserDetails }) => {
  return (
    <div className="profile-details">
      <div>
        <label>Username</label>
        <p>{userDetails.userName ?? "N/A"}</p>
      </div>
      <div>
        <label>Email</label>
        <p>{userDetails.userEmail ?? "N/A"}</p>
      </div>
      <div>
        <label>Date of birth</label>
        <p>{userDetails.userBirthDate ?? "N/A"}</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
