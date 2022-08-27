import React from "react";
import { Navigate } from "react-router-dom";

import CryptoLogo from "../../assets/icons/cryptowall-logo.svg";
import "./sidebar.css";
import { navigations } from "./navData";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={CryptoLogo} alt={"Crypto logo"} />
        <div>Cryptowall</div>
      </div>
      <nav>
        <ul>
          {navigations.map((nav) => (
            <li
              className={`nav-item-${nav.isActive ? "active" : "inactive"}`}
              onClick={nav.onClick}
            >
              <span className="nav-item-icon">
                {<img src={nav.iconPath} alt={nav.item} />}
              </span>
              <span className="nav-item-text">{nav.item}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
