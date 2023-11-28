import { Routes, Route } from "react-router-dom";

import { Signin } from "../pages/Signin";
import { TelaCurso } from "../pages/TelaCurso";
import { GrupoSelecto } from "../pages/GrupoSelecto";
import { ChatPage } from "../pages/ChatPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TelaCurso />} />
      <Route path="/gruposelecto" element={<GrupoSelecto />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}
