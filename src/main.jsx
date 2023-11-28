import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { Signin } from "./pages/Signin";
import { TelaCurso } from "./pages/TelaCurso";
import { GrupoSelecto } from "./pages/GrupoSelecto";
import { ChatPage } from "./pages/ChatPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Signin /> */}
      {/* <TelaCurso /> */}
      {/* <GrupoSelecto /> */}
      <ChatPage />
    </ThemeProvider>
  </React.StrictMode>
);
