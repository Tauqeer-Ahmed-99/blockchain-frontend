import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import ThemeProvider from "./context/ThemeContext/ThemeProvider";
import UserProvider from "./context/UserContext/UserProvider";

import { BrowserRouter } from "react-router-dom";
import BlockchainProvider from "./context/BlockchainContext/BlockchainProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <UserProvider>
          <BlockchainProvider>
            <App />
          </BlockchainProvider>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
