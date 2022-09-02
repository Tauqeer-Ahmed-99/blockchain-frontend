import React from "react";
import WalletInfo from "../../components/WalletInfo/WalletInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./settings.css";

const Settings = () => {
  return (
    <div className="settings-screen">
      <Sidebar />
      <div className="settings">Settings</div>
      <WalletInfo />
    </div>
  );
};

export default Settings;
