import React from "react";
import ReactDOM from "react-dom/client";

import { AppRoot } from '@telegram-apps/telegram-ui';
import { App } from "./App.tsx";
// import "./index.css";

// import WebApp from "@twa-dev/sdk";
//
// WebApp.ready();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRoot>
      <App />
    </AppRoot>
  </React.StrictMode>,
);
