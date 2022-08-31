import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./homescreen.css";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <Sidebar />
      <Dashboard />
      <ProfileInfo />
    </div>
  );
};

export default HomeScreen;
