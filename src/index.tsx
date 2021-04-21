import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/global";
import theme from "styles/theme";

import Routes from "./pages/routes";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
