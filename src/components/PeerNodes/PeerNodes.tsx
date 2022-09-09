import React, { useContext } from "react";

// import { nodesResponse } from "../../assets/mock/mockData";
import UserContext from "../../context/UserContext/UserContext";
import Node from "./Node/Node";

import "./peernodes.css";

const PeerNodes = () => {
  const userContext = useContext(UserContext);
  return (
    <div className="peer-nodes">
      <header className="peer-nodes-header">
        <div className="peer-nodes-user-name">
          {userContext.state.user?.displayName}
        </div>
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
        {/* {userContext.state.userBlockchainDetails?.all_available_peer_nodes
          .length === 0 && <h4> No nodes available.</h4>}
        {userContext.state.userBlockchainDetails?.all_available_peer_nodes.map(
          (node, i) => (
            <Node key={node + i} node={node} />
          )
        )} */}
      </main>
    </div>
  );
};

export default PeerNodes;
