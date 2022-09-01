import React from "react";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./exchange.css";

const Exchange = () => {
  return (
    <div className="exchange-screen">
      <Sidebar />
      <div className="exchange">Exchange</div>
      <ProfileInfo />
    </div>
  );
};

export default Exchange;
