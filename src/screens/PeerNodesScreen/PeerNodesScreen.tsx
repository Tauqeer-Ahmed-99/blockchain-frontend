import React from "react";
import WalletInfo from "../../components/WalletInfo/WalletInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./peernodesscreen.css";
import PeerNodes from "../../components/PeerNodes/PeerNodes";

const PeerNodesScreen = () => {
  return (
    <div className="peer-nodes-screen">
      <Sidebar />
      <PeerNodes />
      <WalletInfo />
    </div>
  );
};

export default PeerNodesScreen;
