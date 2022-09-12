import React from "react";

import "./open_transaction-tile.css";

type OpenTransactionTileProps = {
  recepient: string;
  day?: string;
  amount: string;
};

const OpenTransactionTile = ({
  recepient,
  day,
  amount,
}: OpenTransactionTileProps) => {
  return (
    <div className="open-transaction-tile">
      <div>
        <h5>{recepient}</h5>
        <div>{day}</div>
      </div>
      <p>${amount}</p>
    </div>
  );
};

export default OpenTransactionTile;
