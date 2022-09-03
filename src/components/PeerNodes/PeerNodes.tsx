import React from "react";

import { nodesResponse } from "../../assets/mock/mockData";
import Node from "./Node/Node";

import "./peernodes.css";

const PeerNodes = () => {
  return (
    <div className="peer-nodes">
      <header className="peer-nodes-header">
        <div className="peer-nodes-user-name">Tauqeer Khan</div>
        <div className="peer-nodes-heading-text">Peer Nodes</div>
      </header>
      <div className="add-node-input">
        <div>
          <label>Add nodes</label>
          <input
            className="add-node-field"
            type="text"
            placeholder="Add Node"
          />
        </div>
        <button>Add</button>
      </div>
      <main className="peer-nodes-container">
        <h3 className="node-heading">Available Peer Nodes</h3>
        {nodesResponse.all_available_peer_nodes.map((node, i) => (
          <Node key={node + i} node={node} />
        ))}
      </main>
    </div>
  );
};

export default PeerNodes;
