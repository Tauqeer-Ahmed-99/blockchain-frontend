import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<div className="App">Blockchain Frontend</div>}
      ></Route>
      <Route path="/login" element={<LoginScreen />}></Route>
      <Route path="/home" element={<HomeScreen />}></Route>
      <Route path="/profile" element={<ProfileScreen />}></Route>
    </Routes>
  );
};

export default App;
