import React from "react";
import WalletInfo from "../../components/WalletInfo/WalletInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./profilescreen.css";
import Profile from "../../components/Profile/Profile";

const ProfileScreen = () => {
  return (
    <div className="profile-screen">
      <Sidebar />
      <Profile />
      <WalletInfo />
    </div>
  );
};

export default ProfileScreen;
