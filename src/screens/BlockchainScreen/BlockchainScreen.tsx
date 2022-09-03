import React from "react";

import Blockchain from "../../components/Blockchain/Blockchain";
import Sidebar from "../../components/Sidebar/Sidebar";
import WalletInfo from "../../components/WalletInfo/WalletInfo";

import "./blockchainscreen.css";

const BlockchainScreen = () => {
  return (
    <div className="blockchain-screen">
      <Sidebar />
      <Blockchain />
      <WalletInfo />
    </div>
  );
};

export default BlockchainScreen;
