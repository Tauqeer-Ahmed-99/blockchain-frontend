import React, { useContext } from "react";
import BlockchainContext from "../../context/BlockchainContext/BlockchainContext";
// import { blockchainResponse } from "../../assets/mock/mockData";
import UserContext from "../../context/UserContext/UserContext";
import Block from "./Block/Block";

import "./blockchain.css";

const Blockchain = () => {
  const userContext = useContext(UserContext);
  const blockchainContext = useContext(BlockchainContext);

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
        {blockchainContext?.userBlockchainDetails?.userBlockchainDetails?.blockchain?.map(
          (block) => (
            <Block key={block.index} {...block} />
          )
        )}
      </main>
    </div>
  );
};

export default Blockchain;
