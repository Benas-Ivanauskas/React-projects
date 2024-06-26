import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer";
import ProductsPage from "./Pages/ProductsPage";
import CurrentProductDetails from "./Pages/CurrentProductDetails";
import { ToastContainer } from "react-toastify";
import CheckOutPage from "./Pages/CheckOutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/products" element={<ProductsPage />} />
          <Route
            path="current-product/:id"
            element={<CurrentProductDetails />}
          />
          <Route path="/checkout" element={<CheckOutPage />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
