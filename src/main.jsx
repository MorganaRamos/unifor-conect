import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { Details } from "./pages/Details";
import { Signin } from "./pages/Signin";
import { TelaInicial } from "./pages/TelaInicial";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Details /> */}
      {/* <Signin /> */}
      <TelaInicial />
    </ThemeProvider>
  </React.StrictMode>
);
