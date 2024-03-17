import NavBar from "./Pages/components/NavBar";
import Footer from "./Pages/components/Footer";
import HomePage from "./Pages/HomePage";
import CarListing from "./Pages/CarListing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./sass/normalized.css";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/car-listing" element={<CarListing />} />
      </Routes>
      <Footer />
    </Router>
  );
}
