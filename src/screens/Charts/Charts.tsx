import React from "react";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./charts.css";

const Charts = () => {
  return (
    <div className="charts-screen">
      <Sidebar />
      <div className="charts">Charts</div>
      <ProfileInfo />
    </div>
  );
};

export default Charts;
