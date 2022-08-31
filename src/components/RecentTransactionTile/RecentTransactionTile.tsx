import React from "react";

import "./recent_transaction-tile.css";

type RecentTransactionTileProps = {
  recepient: string;
  day: string;
  amount: string;
};

const RecentTransactionTile = ({
  recepient,
  day,
  amount,
}: RecentTransactionTileProps) => {
  return (
    <div className="recent-transaction-tile">
      <div>
        <h5>{recepient}</h5>
        <div>{day}</div>
      </div>
      <p>${amount}</p>
    </div>
  );
};

export default RecentTransactionTile;
