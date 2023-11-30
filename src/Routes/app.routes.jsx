import { Routes, Route } from "react-router-dom";
import { TelaCurso } from "../pages/TelaCurso";
import { ChatPage } from "../pages/ChatPage";
import { GrupoSelecto } from "../pages/GrupoSelecto";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ChatPage />} />
      <Route path="/curso" element={<TelaCurso />}/>
      <Route path="/grupo" element={<GrupoSelecto />}/>
    </Routes>
  );
}
