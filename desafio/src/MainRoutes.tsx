import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {Search} from "./pages/Home/Search";
import {Perfil} from "./pages/profile/Perfil";

export function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/profile/:username" element={<Perfil />} />
      </Routes>
    </Router>
  );
}
