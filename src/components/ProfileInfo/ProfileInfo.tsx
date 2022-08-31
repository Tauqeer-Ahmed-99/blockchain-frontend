import React from "react";

import RecentTransactionTile from "../RecentTransactionTile/RecentTransactionTile";
import { mockRecentTxns } from "./mockRecentTxns";
import NotificationIcon from "../../assets/icons/notification-icon.svg";
import AvatarMale from "../../assets/icons/avatar-male.svg";
import ArrowUp from "../../assets/icons/arrow-up-keyboard.svg";
import ArrowDown from "../../assets/icons/arrow-down-keyboard.svg";
import MineIcon from "../../assets/icons/mine.svg";
import SendIcon from "../../assets/icons/arrow-up-action.svg";
import ReceiveIcon from "../../assets/icons/arrow-down-action.svg";

import "../ProfileInfo/profileinfo.css";

const ProfileInfo = () => {
  return (
    <div className="profile">
      <div className="profile-header">
        <img
          src={NotificationIcon}
          alt="Notification Icon"
          className="notification"
        />
        <div className="user-avatar">
          <img src={AvatarMale} alt="Avatar" className="avatar" />

          <div className="user">
            <span>Tauqeer Khan </span>
            <span>
              <img src={ArrowDown} alt="Arrow" className="arrow" />
            </span>
          </div>
        </div>
      </div>
      <div className="balance-card">
        <h3>My Cards</h3>
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
            <RecentTransactionTile {...txn} />
          ))}
          <div className="show-more">Show more</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
