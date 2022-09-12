import React, { useState } from "react";
import { Block as BlockType } from "../blockchainTypes";

import Transaction from "./Transaction/Transaction";
import ArrowUp from "../../../assets/icons/arrow-up-keyboard.svg";
import ArrowDown from "../../../assets/icons/arrow-down-keyboard.svg";
import ArrowRightList from "../../../assets/icons/arrow-right-list.svg";
import ArrowDownList from "../../../assets/icons/arrow-down-list.svg";
import "./block.css";

const Block = ({
  index,
  previous_hash,
  proof,
  time,
  transactions,
}: BlockType) => {
  const [isBlockDetailVisible, setIsBlockDetailVisible] = useState(false);
  const [isTransactionsDetailVisible, setIsTransactionsDetailVisible] =
    useState(false);

  const toggleBlock = () => {
    setIsBlockDetailVisible((prevState) => !prevState);
  };

  const toggleTransactionsList = () => {
    setIsTransactionsDetailVisible((prevState) => !prevState);
  };

  return (
    <div className="block">
      <h3 onClick={toggleBlock}>
        {`Block ${
          index + 1 === 1 ? index + 1 + " (Genesis Block)" : index + 1
        }`}{" "}
        <img src={isBlockDetailVisible ? ArrowUp : ArrowDown} alt="Arrow" />
      </h3>
      <div
        className={`block-details ${
          isBlockDetailVisible ? "visible" : "hidden"
        }`}
      >
        <p>Index: {index}</p>
        <p>Previous hash: {previous_hash}</p>
        <p>PoW: {proof}</p>
        <p>Date: {time}</p>
        <div className="transaction-heading" onClick={toggleTransactionsList}>
          <span>Transaction(s): </span>{" "}
          <img
            src={isTransactionsDetailVisible ? ArrowDownList : ArrowRightList}
            alt="Arrow"
          />{" "}
          <span>{transactions.length}</span>
        </div>
        <div
          className={`transactions-list ${
            isTransactionsDetailVisible ? "visible" : "hidden"
          }`}
        >
          {transactions.map((txn, i) => (
            <Transaction key={txn.recipient + i} {...txn} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Block;
