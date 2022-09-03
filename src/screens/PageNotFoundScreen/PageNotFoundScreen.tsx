import React from "react";
import { useLocation } from "react-router-dom";

import CryptoLogo from "../../assets/icons/cryptowall-logo.svg";

import "./pagenotfoundscreen.css";

const PageNotFoundScreen = () => {
  const { pathname } = useLocation();

  return (
    <div className="no-page-found">
      <div className="container">
        <div className="no-page-found-text">
          <div className="crypto-logo">
            <img src={CryptoLogo} alt={"Crypto logo"} />
            <b>Cryptowall</b>
          </div>
          <b>404</b>. <span>That's an error.</span>
          <p>
            {`The requested URL ${pathname} was not found on this server.`}
            <span> That's all we know.</span>
          </p>
        </div>
        <div className="no-page-found-robot">
          <img
            src="https://www.google.com/images/errors/robot.png"
            alt="Robot"
          />
        </div>
      </div>
    </div>
  );
};

export default PageNotFoundScreen;
