import React from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import WalletInfo from "../../components/WalletInfo/WalletInfo";

import "./blockchain.css";

const Blockchain = () => {
  return (
    <div className="blockchain-screen">
      <Sidebar />
      <div className="blockchain-component">Blockchain</div>
      <WalletInfo />
    </div>
  );
};

export default Blockchain;
