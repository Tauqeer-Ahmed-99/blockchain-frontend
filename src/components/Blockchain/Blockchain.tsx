import React, { useContext } from "react";
// import { blockchainResponse } from "../../assets/mock/mockData";
import UserContext from "../../context/UserContext/UserContext";
import Block from "./Block/Block";

import "./blockchain.css";

const Blockchain = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="blockchain-component">
      <header className="blockchain-component-header">
        <div>
          <div className="blockchain-component-username">
            {userContext.state.user?.displayName}
          </div>
          <div className="blockchain-component-heading-text">Blockchain</div>
        </div>
      </header>
      <main className="blockchain-container">
        {userContext.state.userBlockchainDetails?.blockchain.map((block) => (
          <Block key={block.index} {...block} />
        ))}
      </main>
    </div>
  );
};

export default Blockchain;
