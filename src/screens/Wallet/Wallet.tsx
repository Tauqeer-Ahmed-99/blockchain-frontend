import React from "react";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./wallet.css";

const Wallet = () => {
  return (
    <div className="wallet-screen">
      <Sidebar />
      <div className="wallet">Wallet</div>
      <ProfileInfo />
    </div>
  );
};

export default Wallet;
