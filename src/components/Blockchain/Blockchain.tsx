import React from "react";
import { blockchainResponse } from "../../assets/mock/mockData";
import Block from "./Block/Block";

import "./blockchain.css";

const Blockchain = () => {
  return (
    <div className="blockchain-component">
      <header className="blockchain-component-header">
        <div>
          <div className="blockchain-component-username">Tauqeer Khan</div>
          <div className="blockchain-component-heading-text">Blockchain</div>
        </div>
      </header>
      <main className="blockchain-container">
        {blockchainResponse.blockchain.map((block) => (
          <Block key={block.index} {...block} />
        ))}
      </main>
    </div>
  );
};

export default Blockchain;
