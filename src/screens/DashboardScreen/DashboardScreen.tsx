import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import WalletInfo from "../../components/WalletInfo/WalletInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./dashboardscreen.css";

const DashBoardScreen = () => {
  return (
    <div className="homescreen">
      <Sidebar />
      <Dashboard />
      <WalletInfo />
    </div>
  );
};

export default DashBoardScreen;
