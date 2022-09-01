import React from "react";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./settings.css";

const Settings = () => {
  return (
    <div className="settings-screen">
      <Sidebar />
      <div className="settings">Settings</div>
      <ProfileInfo />
    </div>
  );
};

export default Settings;
