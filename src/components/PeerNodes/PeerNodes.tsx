import React, { useContext, useState } from "react";
import BlockchainContext from "../../context/BlockchainContext/BlockchainContext";

// import { nodesResponse } from "../../assets/mock/mockData";
import UserContext from "../../context/UserContext/UserContext";
import Dialog from "../Dialog/Dialog";
import Node from "./Node/Node";
import CloseIcon from "../../assets/icons/close.svg";

import "./peernodes.css";

const PeerNodes = () => {
  const [nodeInput, setNodeInput] = useState("");
  const [isNodeErrror, setIsNodeError] = useState(false);
  const [open, setOpen] = useState(false);

  const userContext = useContext(UserContext);
  const blockchainContext = useContext(BlockchainContext);

  const handleNodeInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNodeInput(event.target.value);
    if (!event.target.value) {
      setIsNodeError(true);
    } else {
      setIsNodeError(false);
    }
  };

  const openAddNodeConfirmationBox = () => {
    setOpen(true);
  };

  const closeAddNodeConfirmationBox = () => {
    setOpen(false);
  };

  const handleAddButtonClick = () => {
    if (!nodeInput) {
      setIsNodeError(true);
    } else {
      setIsNodeError(false);
      openAddNodeConfirmationBox();
    }
  };

  const addNode = () => {
    blockchainContext.addNode(userContext.state.user?.uid as string, nodeInput);
    closeAddNodeConfirmationBox();
  };

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
            value={nodeInput}
            onChange={handleNodeInputChange}
          />
          {isNodeErrror && (
            <span className="error">Please add a valid node value.</span>
          )}
        </div>
        <button onClick={handleAddButtonClick}>Add</button>
      </div>
      <Dialog open={open} onClose={closeAddNodeConfirmationBox} width="20rem">
        <div className="dialog-header">
          <h3>Are you sure?</h3>
          <img
            src={CloseIcon}
            alt="Close"
            onClick={closeAddNodeConfirmationBox}
          />
        </div>
        <div className="dialog-content">
          {`Add "${nodeInput}" node to peer nodes?`}
        </div>
        <div className="dialog-actions">
          <button onClick={addNode}>Yes</button>
          <button onClick={closeAddNodeConfirmationBox}>No</button>
        </div>
      </Dialog>
      <Dialog
        open={blockchainContext.userBlockchainDetails?.isLoading as boolean}
        width="20rem"
      >
        <div className="dialog-header">
          <h3>Loading...</h3>
        </div>
        <div className="dialog-content">
          {blockchainContext.userBlockchainDetails?.loadingMessage}
        </div>
      </Dialog>
      <Dialog
        open={blockchainContext.userBlockchainDetails?.isError as boolean}
        onClose={closeAddNodeConfirmationBox}
        width="20rem"
      >
        <div className="dialog-header">
          <h3>Error</h3>
        </div>
        <div className="dialog-content">
          {blockchainContext.userBlockchainDetails?.errorMessage}
        </div>
        <div className="dialog-actions">
          <button onClick={closeAddNodeConfirmationBox}>Close</button>
        </div>
      </Dialog>
      <main className="peer-nodes-container">
        <h3 className="node-heading">Available Peer Nodes</h3>
        {blockchainContext.userBlockchainDetails?.userBlockchainDetails
          ?.all_available_peer_nodes.length === 0 && (
          <h4> No nodes available.</h4>
        )}
        {blockchainContext.userBlockchainDetails?.userBlockchainDetails?.all_available_peer_nodes?.map(
          (node, i) => (
            <Node key={node + i} node={node} />
          )
        )}
      </main>
    </div>
  );
};

export default PeerNodes;
