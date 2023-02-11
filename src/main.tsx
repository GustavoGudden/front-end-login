import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./GlobalStyle";
import RouterController from "./Router/RouterCrontoller";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterController />
  </React.StrictMode>
);
