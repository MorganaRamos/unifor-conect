import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { Signin } from "./pages/Signin";
import { TelaCurso } from "./pages/TelaCurso";
import { GrupoSelecto } from "./pages/GrupoSelecto";
import { ChatPage } from "./pages/ChatPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Routes } from "./Routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/grupo",
    element: <GrupoSelecto />,
  },
  {
    path: "/curso",
    element: <TelaCurso />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Signin /> */}
      {/* <TelaCurso /> */}
      {/* <GrupoSelecto /> */}
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
