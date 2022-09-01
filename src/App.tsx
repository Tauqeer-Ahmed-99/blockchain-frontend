import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import Charts from "./screens/Charts/Charts";
import Exchange from "./screens/Exchange/Exchange";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import NoPageFound from "./screens/NoPageFound/NoPageFound";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import Settings from "./screens/Settings/Settings";
import Wallet from "./screens/Wallet/Wallet";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (!accessToken) {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LoginScreen />}></Route>
      <Route path="/login" element={<LoginScreen />}></Route>
      <Route path="/dashboard" element={<HomeScreen />}></Route>
      <Route path="/exchange" element={<Exchange />}></Route>
      <Route path="/wallet" element={<Wallet />}></Route>
      <Route path="/charts" element={<Charts />}></Route>
      <Route path="/profile" element={<ProfileScreen />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
      <Route path="*" element={<NoPageFound />}></Route>
    </Routes>
  );
};

export default App;
