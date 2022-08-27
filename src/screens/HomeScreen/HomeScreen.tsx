import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./homescreen.css";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default HomeScreen;
