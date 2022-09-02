import React from "react";
import WalletInfo from "../../components/WalletInfo/WalletInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./peernodes.css";

const PeerNodes = () => {
  return (
    <div className="peer-nodes-screen">
      <Sidebar />
      <div className="peer-nodes">Peer Nodes</div>
      <WalletInfo />
    </div>
  );
};

export default PeerNodes;
