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
import { useEffect, useState } from "react";

export default function App() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const getData = () => {
      let requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch("http://localhost:3000/cars", requestOptions)
        .then((response) => response.json())
        .then((result) => setCars(result))
        .catch((error) => console.log("error", error));
    };
    getData();
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<HomePage cars={cars} />} />
        <Route path="/car-listing" element={<CarListing />} />
      </Routes>
      <Footer />
    </Router>
  );
}
