import React from "react";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./profilescreen.css";

const ProfileScreen = () => {
  return (
    <div className="profile-screen">
      <Sidebar />
      <ProfileInfo />
    </div>
  );
};

export default ProfileScreen;
