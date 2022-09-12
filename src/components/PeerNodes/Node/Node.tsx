import React, { useContext, useState } from "react";

import Dialog from "../../Dialog/Dialog";
import CloseIcon from "../../../assets/icons/close.svg";

import "./node.css";
import BlockchainContext from "../../../context/BlockchainContext/BlockchainContext";
import UserContext from "../../../context/UserContext/UserContext";

type NodePropsType = {
  node: string;
};

const Node = ({ node }: NodePropsType) => {
  const [isConfirmationBoxOpen, setIsConfirmationBoxOpen] = useState(false);

  const userContext = useContext(UserContext);
  const blockchainContext = useContext(BlockchainContext);

  const openConfirmationBox = () => {
    setIsConfirmationBoxOpen(true);
  };

  const closeConfirmationBox = () => {
    setIsConfirmationBoxOpen(false);
  };

  const deleteNode = () => {
    blockchainContext.deleteNode(userContext.state.user?.uid as string, node);
    closeConfirmationBox();
  };

  return (
    <div className="node">
      <span>{node}</span>
      <button onClick={openConfirmationBox}>Remove</button>
      <Dialog open={isConfirmationBoxOpen} onClose={closeConfirmationBox}>
        <div className="dialog-header">
          <h3>Are you sure?</h3>
          <img src={CloseIcon} alt="close" onClick={closeConfirmationBox} />
        </div>
        <div className="dialog-content">
          <p>{`Do you really want to remove '${node}' node?`}</p>
        </div>
        <div className="dialog-actions">
          <button onClick={deleteNode}>Yes</button>
          <button onClick={closeConfirmationBox}>No</button>
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
          <p>{blockchainContext.userBlockchainDetails?.loadingMessage}</p>
        </div>
      </Dialog>
      <Dialog
        open={blockchainContext.userBlockchainDetails?.isError as boolean}
        onClose={closeConfirmationBox}
        width="20rem"
      >
        <div className="dialog-header">
          <h3>Error</h3>
          <img src={CloseIcon} alt="close" onClick={closeConfirmationBox} />
        </div>
        <div className="dialog-content">
          <p>{blockchainContext.userBlockchainDetails?.errorMessage}</p>
        </div>
      </Dialog>
    </div>
  );
};

export default Node;
