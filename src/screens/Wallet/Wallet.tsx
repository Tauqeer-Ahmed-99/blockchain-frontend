import React from "react";
import WalletInfo from "../../components/WalletInfo/WalletInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./wallet.css";

const Wallet = () => {
  return (
    <div className="wallet-screen">
      <Sidebar />
      <WalletInfo onWalletPage />
    </div>
  );
};

export default Wallet;
