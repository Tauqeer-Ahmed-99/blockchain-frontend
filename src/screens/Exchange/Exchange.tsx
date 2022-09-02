import React from "react";
import WalletInfo from "../../components/WalletInfo/WalletInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./exchange.css";

const Exchange = () => {
  return (
    <div className="exchange-screen">
      <Sidebar />
      <div className="exchange">Exchange</div>
      <WalletInfo />
    </div>
  );
};

export default Exchange;
