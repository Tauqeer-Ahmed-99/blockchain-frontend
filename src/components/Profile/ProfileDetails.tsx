import React from "react";

import "./profiledetails.css";

const ProfileDetails = () => {
  return (
    <div className="profile-details">
      <div>
        <label>Username</label>
        <p>Tauqeer Khan</p>
      </div>
      <div>
        <label>Email</label>
        <p>tauqueerrkhan@gmail.com</p>
      </div>
      <div>
        <label>Date of birth</label>
        <p>12/06/1999</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
