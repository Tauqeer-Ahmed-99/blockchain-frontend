import React, { useState } from "react";

import RecentTransactionTile from "../RecentTransactionTile/RecentTransactionTile";
import { mockRecentTxns } from "../../assets/mock/mockData";
import NotificationIcon from "../../assets/icons/notification-icon.svg";
import AvatarMale from "../../assets/icons/avatar-male.svg";
import ArrowUp from "../../assets/icons/arrow-up-keyboard.svg";
import ArrowDown from "../../assets/icons/arrow-down-keyboard.svg";
import MineIcon from "../../assets/icons/mine.svg";
import SendIcon from "../../assets/icons/arrow-up-action.svg";
import ReceiveIcon from "../../assets/icons/arrow-down-action.svg";

import "./walletinfo.css";
import { useNavigate } from "react-router-dom";

type WalletInfoProps = {
  onWalletPage?: boolean;
};

const WalletInfo = ({ onWalletPage = false }: WalletInfoProps) => {
  const [isProfileListVisible, setIsProfileListVisible] = useState(false);

  const navigate = useNavigate();

  const handleSignout = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    sessionStorage.removeItem("accessToken");
    navigate("/login");
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
            <span>Tauqeer Khan </span>
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
            <div className="signout" onClick={handleSignout}>
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
            <h2 className="count">$450,245</h2>
          </div>
          <div className="profit">
            <div className="text">Monthly profit</div>
            <h2 className="count">
              $12,484
              <span>
                <img src={ArrowUp} alt="Arrow" />
                +10%
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="actions">
        <div className="mine">
          <button>
            <img src={MineIcon} alt="Mining Icon" />
            Mine
          </button>
        </div>
        <div className="transactions">
          <button>
            <img src={ReceiveIcon} alt="Receive Icon" />
            Request
          </button>
          <button>
            <img src={SendIcon} alt="Send Icon" />
            Transfer
          </button>
        </div>
      </div>
      <div className="recent-transactions">
        <h3>Recent Transactions</h3>
        <div className="txns">
          {mockRecentTxns.map((txn) => (
            <RecentTransactionTile key={txn.id} {...txn} />
          ))}
          <div className="show-more">Show more</div>
        </div>
      </div>
    </div>
  );
};

export default WalletInfo;
