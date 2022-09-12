import React, { useContext, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";

import LoginScreen from "./screens/LoginScreen/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen/DashboardScreen";
import BlockchainScreen from "./screens/BlockchainScreen/BlockchainScreen";
import PeerNodesScreen from "./screens/PeerNodesScreen/PeerNodesScreen";
import WalletScreen from "./screens/WalletScreen/WalletScreen";
import ChartsScreen from "./screens/ChartsScreen/ChartsScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen/SettingsScreen";
import PageNotFoundScreen from "./screens/PageNotFoundScreen/PageNotFoundScreen";
import ThemeContext from "./context/ThemeContext/ThemeContext";

import "./App.css";

const App = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div data-theme={themeContext.theme}>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />}></Route>
        <Route path="/login" element={<LoginScreen />}></Route>
        <Route path="/dashboard" element={<DashboardScreen />}></Route>
        <Route path="/blockchain" element={<BlockchainScreen />}></Route>
        <Route path="/peer-nodes" element={<PeerNodesScreen />}></Route>
        <Route path="/wallet" element={<WalletScreen />}></Route>
        <Route path="/charts" element={<ChartsScreen />}></Route>
        <Route path="/profile" element={<ProfileScreen />}></Route>
        <Route path="/settings" element={<SettingsScreen />}></Route>
        <Route path="*" element={<PageNotFoundScreen />}></Route>
      </Routes>
    </div>
  );
};

export default App;
