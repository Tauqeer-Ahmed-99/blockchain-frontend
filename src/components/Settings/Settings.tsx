import React, { useContext } from "react";

import Switch from "../Switch/Switch";
import SunIcon from "../../assets/icons/sun.svg";
import MoonIcon from "../../assets/icons/moon.svg";

import "./settings.css";
import ThemeContext from "../../context/ThemeContext/ThemeContext";
import UserContext from "../../context/UserContext/UserContext";

const Settings = () => {
  const themeContext = useContext(ThemeContext);
  const userContext = useContext(UserContext);

  const toggleTheme = () => {
    themeContext.toggleTheme();
  };

  return (
    <div className="settings">
      <header className="settings-header">
        <div>
          <div className="settings-username">
            {userContext.state.user?.displayName}
          </div>
          <div className="settings-heading-text">Settings</div>
        </div>
      </header>
      <main className="settings-container">
        <div className="theme">
          <span>Theme</span>
          <span className="switch-with-icons">
            <img src={MoonIcon} alt="Dark" />
            <Switch
              checked={themeContext.theme === "light"}
              onChange={toggleTheme}
            />
            <img src={SunIcon} alt="Light" />
          </span>
        </div>
      </main>
    </div>
  );
};

export default Settings;
