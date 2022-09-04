import React from "react";

import "./circularloader.css";

const CircularLoader = () => {
  return (
    <svg className="loader-circular" viewBox="0 0 50 50">
      <circle
        className="loader-path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default CircularLoader;
