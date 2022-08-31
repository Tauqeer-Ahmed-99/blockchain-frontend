import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import NoPageFound from "./screens/NoPageFound/NoPageFound";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

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
      <Route path="/profile" element={<ProfileScreen />}></Route>
      <Route path="*" element={<NoPageFound />}></Route>
    </Routes>
  );
};

export default App;
