import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/landingPage";
import { LoginPage } from "../pages/login";
import { HomePage } from "../pages/home";
import { RegisterPage } from "../pages/register";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
