import React from "react";
import WalletInfo from "../../components/WalletInfo/WalletInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./charts.css";

const Charts = () => {
  return (
    <div className="charts-screen">
      <Sidebar />
      <div className="charts">Charts</div>
      <WalletInfo />
    </div>
  );
};

export default Charts;
