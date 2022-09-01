import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import CryptoLogo from "../../assets/icons/cryptowall-logo.svg";
import "./sidebar.css";
import { navigations } from "./navData";

const Sidebar = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

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
              className={`nav-item-${
                pathname === nav.route ? "active" : "inactive"
              }`}
              onClick={() => {
                navigate(nav.route);
              }}
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
