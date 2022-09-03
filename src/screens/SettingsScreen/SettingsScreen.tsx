import React from "react";
import WalletInfo from "../../components/WalletInfo/WalletInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./settingsscreen.css";
import Settings from "../../components/Settings/Settings";

const SettingsScreen = () => {
  return (
    <div className="settings-screen">
      <Sidebar />
      <Settings />
      <WalletInfo />
    </div>
  );
};

export default SettingsScreen;
