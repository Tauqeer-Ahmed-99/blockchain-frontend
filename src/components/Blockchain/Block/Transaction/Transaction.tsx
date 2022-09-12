import React from "react";

import { Transaction as TransactionType } from "../../blockchainTypes";

import "./transaction.css";

const Transaction = ({
  amount,
  recipient,
  sender,
  signature,
}: TransactionType) => {
  return (
    <div className="transaction">
      <p>Sender: {sender}</p>
      <p>Recipient: {recipient}</p>
      <p>Amount: {amount}</p>
      <p>Signature: {signature}</p>
    </div>
  );
};

export default Transaction;
