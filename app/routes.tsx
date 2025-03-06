import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "app/routes/home"; // Ensure you have this file
import CurrencyWidget from "./components/CurrencyWidget"; // Ensure this is correct

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/widget" element={<CurrencyWidget />} />
      </Routes>
    </BrowserRouter>
  );
}
