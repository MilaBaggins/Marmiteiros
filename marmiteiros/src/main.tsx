import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { StyledGlobals } from "./styles/globals.ts";
import { StyledColors } from "./styles/colors.ts";
import { StyledTypography } from "./styles/typography.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledGlobals />
      <StyledColors />
      <StyledTypography />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
