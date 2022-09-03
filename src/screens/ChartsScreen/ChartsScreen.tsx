import React from "react";
import WalletInfo from "../../components/WalletInfo/WalletInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./chartsscreen.css";
import ChartsGroup from "../../components/Charts/ChartsGroup";

const ChartsScreen = () => {
  return (
    <div className="charts-screen">
      <Sidebar />
      <ChartsGroup />
      <WalletInfo />
    </div>
  );
};

export default ChartsScreen;
