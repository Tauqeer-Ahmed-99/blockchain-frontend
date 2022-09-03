import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import Charts from "./screens/Charts/Charts";
import PeerNodesScreen from "./screens/PeerNodesScreen/PeerNodesScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import NoPageFound from "./screens/NoPageFound/NoPageFound";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen/SettingsScreen";
import Wallet from "./screens/Wallet/Wallet";
import BlockchainScreen from "./screens/BlockchainScreen/BlockchainScreen";
import ThemeContext from "./context/ThemeContext/ThemeContext";

const App = () => {
  const themeContext = useContext(ThemeContext);

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (!accessToken) {
      navigate("/login");
    }
  }, []);

  return (
    <div data-theme={themeContext.theme}>
      <Routes>
        <Route path="/" element={<LoginScreen />}></Route>
        <Route path="/login" element={<LoginScreen />}></Route>
        <Route path="/dashboard" element={<HomeScreen />}></Route>
        <Route path="/blockchain" element={<BlockchainScreen />}></Route>
        <Route path="/peer-nodes" element={<PeerNodesScreen />}></Route>
        <Route path="/wallet" element={<Wallet />}></Route>
        <Route path="/charts" element={<Charts />}></Route>
        <Route path="/profile" element={<ProfileScreen />}></Route>
        <Route path="/settings" element={<SettingsScreen />}></Route>
        <Route path="*" element={<NoPageFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
