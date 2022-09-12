import React, { useContext, useState } from "react";

import OpenTransactionTile from "../OpenTransactionTile/OpenTransactionTile";
// import { mockOpenTxns } from "../../assets/mock/mockData";
import NotificationIcon from "../../assets/icons/notification-icon.svg";
import AvatarMale from "../../assets/icons/avatar-male.svg";
import ArrowUp from "../../assets/icons/arrow-up-keyboard.svg";
import ArrowDown from "../../assets/icons/arrow-down-keyboard.svg";
import MineIcon from "../../assets/icons/mine.svg";
import SendIcon from "../../assets/icons/arrow-up-action.svg";
import ReceiveIcon from "../../assets/icons/arrow-down-action.svg";
import CloseIcon from "../../assets/icons/close.svg";

import "./walletinfo.css";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext/UserContext";
import BlockchainContext from "../../context/BlockchainContext/BlockchainContext";
import Dialog from "../Dialog/Dialog";
import CircularLoader from "../CircularLoader/CircularLoader";

type WalletInfoProps = {
  onWalletPage?: boolean;
};

const WalletInfo = ({ onWalletPage = false }: WalletInfoProps) => {
  const [isProfileListVisible, setIsProfileListVisible] = useState(false);
  const [isMiningConfirmationBoxOpen, setIsMiningConfirmationBoxOpen] =
    useState(false);
  const [transferDetails, setTransferDetails] = useState({
    isTransferFormOpen: false,
    recipientPublicKey: "",
    sendingAmount: "",
    isError: false,
  });
  const [isSignoutConfirmationOpen, setSignoutConfirmationOpen] =
    useState(false);

  const userContext = useContext(UserContext);
  const blockchainContext = useContext(BlockchainContext);

  const navigate = useNavigate();

  const signout = () => {
    userContext.logout();
    navigate("/login");
  };

  const closeSignoutConfirmation = () => {
    setSignoutConfirmationOpen(false);
    setIsProfileListVisible(false);
  };

  const handleSignoutButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setSignoutConfirmationOpen(true);
  };

  const openMiningConfirmationBox = () => {
    setIsMiningConfirmationBoxOpen(true);
  };

  const closeMiningConfirmationBox = () => {
    setIsMiningConfirmationBoxOpen(false);
  };

  const mineBlock = () => {
    blockchainContext.mineBlock(userContext.state.user?.uid as string);
    closeMiningConfirmationBox();
  };

  const openTransferForm = () => {
    setTransferDetails((prevDetails) => ({
      ...prevDetails,
      isTransferFormOpen: true,
    }));
  };

  const closeTransferForm = () => {
    setTransferDetails((prevDetails) => ({
      ...prevDetails,
      isTransferFormOpen: false,
    }));
  };

  const handleTransferDetailsInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTransferDetails((prevDetails) => ({
      ...prevDetails,
      [event.target.name]: event.target.value,
    }));
  };

  const onTransferClick = () => {
    if (!transferDetails.recipientPublicKey || !transferDetails.sendingAmount) {
      setTransferDetails((prevState) => ({
        ...prevState,
        isError: true,
      }));
    } else {
      setTransferDetails((prevState) => ({
        ...prevState,
        isTransferFormOpen: false,
        isError: false,
      }));
      blockchainContext.transferFunds(
        userContext.state.user?.uid as string,
        blockchainContext.userBlockchainDetails?.userBlockchainDetails?.wallet
          .public_key as string,
        transferDetails.recipientPublicKey,
        transferDetails.sendingAmount
      );
    }
  };

  const closeErrorBox = () => {
    blockchainContext.closeErrorMessageBox();
  };

  return (
    <div className={`wallet${onWalletPage ? "-on-wallet-page" : ""}`}>
      <div className="wallet-header">
        <img
          src={NotificationIcon}
          alt="Notification Icon"
          className="notification"
        />
        <div
          className="user-avatar"
          onClick={() => setIsProfileListVisible((prevState) => !prevState)}
        >
          <img src={AvatarMale} alt="Avatar" className="avatar" />

          <div className="user">
            <span>{userContext.state.user?.displayName ?? "Signup"} </span>
            <span>
              <img
                src={!isProfileListVisible ? ArrowDown : ArrowUp}
                alt="Arrow"
                className="arrow"
              />
            </span>
          </div>
          <div
            className={`signout-parent ${
              !isProfileListVisible ? "hidden" : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="signout" onClick={handleSignoutButtonClick}>
              Sign out
            </div>
          </div>
        </div>
      </div>
      <div className="balance-card">
        <h3>My Wallet</h3>
        <div className="card">
          <div className="balance">
            <div className="text">Balance</div>
            <h2 className="count">{`₹${blockchainContext.userBlockchainDetails?.userBlockchainDetails?.wallet.balance}`}</h2>
          </div>
          <div className="profit">
            <div className="text">Monthly profit</div>
            <h2 className="count">
              {`₹${blockchainContext.userBlockchainDetails?.userBlockchainDetails?.wallet.balance}`}
              <span>
                {/* <img src={ArrowUp} alt="Arrow" /> */}
                -0%
              </span>
            </h2>
          </div>
        </div>
      </div>
      {onWalletPage && (
        <div className="user-info card">
          <h4>Your public key:</h4>
          <p>
            {
              blockchainContext.userBlockchainDetails?.userBlockchainDetails
                ?.wallet.public_key
            }
          </p>
        </div>
      )}
      <div className="actions">
        <div className="mine">
          <button onClick={openMiningConfirmationBox}>
            <img src={MineIcon} alt="Mining Icon" />
            Mine
          </button>
        </div>
        <Dialog
          open={isSignoutConfirmationOpen}
          onClose={closeSignoutConfirmation}
        >
          <div className="dialog-header">
            <h3>Signout?</h3>
            <img
              src={CloseIcon}
              alt="Close"
              onClick={closeSignoutConfirmation}
            />
          </div>
          <div className="dialog-content">Do you really want to signout?</div>
          <div className="dialog-actions">
            <button onClick={closeSignoutConfirmation}>No</button>
            <button onClick={signout}>Signout</button>
          </div>
        </Dialog>
        <Dialog
          open={isMiningConfirmationBoxOpen}
          onClose={closeMiningConfirmationBox}
        >
          <div className="dialog-header">
            <h3>Are you sure?</h3>
            <img
              src={CloseIcon}
              alt="Close"
              onClick={closeMiningConfirmationBox}
            />
          </div>
          <div className="dialog-content">
            Do you really want to mine current block?
          </div>
          <div className="dialog-actions">
            <button onClick={mineBlock}>Yes</button>
            <button onClick={closeMiningConfirmationBox}>No</button>
          </div>
        </Dialog>
        <Dialog
          open={blockchainContext.userBlockchainDetails?.isLoading as boolean}
        >
          <div className="dialog-header">
            <h3>Mining...</h3>
          </div>
          <div className="dialog-content no-actions">
            <CircularLoader />
            <span>
              {blockchainContext.userBlockchainDetails?.loadingMessage}
            </span>
          </div>
        </Dialog>
        <div className="transactions">
          <button>
            <img src={ReceiveIcon} alt="Receive Icon" />
            Request
          </button>
          <button onClick={openTransferForm}>
            <img src={SendIcon} alt="Send Icon" />
            Transfer
          </button>
        </div>
        <Dialog
          open={transferDetails.isTransferFormOpen}
          width="30rem"
          onClose={closeTransferForm}
        >
          <div className="dialog-header">
            <h3>Coins Transfer Details</h3>
            <img src={CloseIcon} alt="Close" onClick={closeTransferForm} />
          </div>
          <div className="dialog-content">
            <div className="transfer-form">
              <div>
                <label>Reciever's public key:</label>
                <input
                  name="recipientPublicKey"
                  value={transferDetails.recipientPublicKey}
                  onChange={handleTransferDetailsInputChange}
                />
                {transferDetails.isError &&
                  !transferDetails.recipientPublicKey && (
                    <span className="error-msg-transfer">
                      Please enter recipient's public key.
                    </span>
                  )}
              </div>
              <div>
                <label>Sending Amount:</label>
                <input
                  name="sendingAmount"
                  type="number"
                  value={transferDetails.sendingAmount}
                  onChange={handleTransferDetailsInputChange}
                />
                {transferDetails.isError && !transferDetails.sendingAmount && (
                  <span className="error-msg-transfer">
                    Please enter an amount to transfer.
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="dialog-actions">
            <button onClick={onTransferClick}>Transfer Coins</button>
            <button onClick={closeTransferForm}>Cancel</button>
          </div>
        </Dialog>
        <Dialog
          open={blockchainContext.userBlockchainDetails?.isMakingTxn as boolean}
        >
          <div className="dialog-header">
            <h3>Sending Coins</h3>
          </div>
          <div className="dialog-content no-actions">
            <CircularLoader />
            {blockchainContext.userBlockchainDetails?.loadingMessage}
          </div>
        </Dialog>
        <Dialog
          open={blockchainContext.userBlockchainDetails?.isError as boolean}
          onClose={closeErrorBox}
        >
          <div className="dialog-header">
            <h3>Error</h3>
            <img src={CloseIcon} alt="Close" />
          </div>
          <div className="dialog-content">
            {blockchainContext.userBlockchainDetails?.errorMessage}
          </div>
          <div className="dialog-actions">
            <button onClick={closeErrorBox}>Close</button>
          </div>
        </Dialog>
      </div>
      <div className="open-transactions">
        <h3>Open Transactions</h3>
        <div className={`txns${onWalletPage ? "" : " not-on-wallet-page"}`}>
          {!blockchainContext.userBlockchainDetails?.userBlockchainDetails
            ?.open_transactions.length && (
            <h5>No open transactions available.</h5>
          )}
          {blockchainContext.userBlockchainDetails?.userBlockchainDetails?.open_transactions.map(
            (txn, i) => (
              <OpenTransactionTile
                key={txn.recipient + i}
                recepient={txn.recipient}
                amount={txn.amount.toString()}
              />
            )
          )}
          {/* <div className="show-more">Show more</div> */}
        </div>
      </div>
    </div>
  );
};

export default WalletInfo;
