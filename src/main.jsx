import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { Signin } from "./pages/Signin";
import { TelaCurso } from "./pages/TelaCurso";
import { GrupoSelecto } from "./pages/GrupoSelecto";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin/>,
  },
  {
    path: "/grupo",
    element: <GrupoSelecto/>,
  },
  {
    path: "/curso",
    element: <TelaCurso/>,
  },
    //   {
    //     path: "/chat",
    //     element: <Contato/>,
    //   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Signin /> */}
      {/* <TelaCurso /> */}
      <GrupoSelecto />
    </ThemeProvider>
  </React.StrictMode>
);
