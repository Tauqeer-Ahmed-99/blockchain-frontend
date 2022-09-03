import React from "react";

import "./node.css";

type NodePropsType = {
  node: string;
};

const Node = ({ node }: NodePropsType) => {
  return (
    <div className="node">
      <span>{node}</span>
      <button>Remove</button>
    </div>
  );
};

export default Node;
