import React from "react";
import WalletInfo from "../../components/WalletInfo/WalletInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./profilescreen.css";

const ProfileScreen = () => {
  return (
    <div className="profile-screen">
      <Sidebar />
      <div className="profile-info">Profile</div>
      <WalletInfo />
    </div>
  );
};

export default ProfileScreen;
