import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import NotFoundPage from "./pages/NotFoundPage";
import QrPage from "./pages/QrPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={window.matchMedia("(max-width: 639px)").matches ? <Navigate to="/menu" replace /> : <HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/qr" element={<QrPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
