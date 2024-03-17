import NavBar from "./components/navBar";
import MainPage from "./pages/BackgroundContent";
import PickApparel from "./pages/pick-apprarel";
import MansClothing from "./pages/mansClothing";
import WomanProductClothing from "./pages/womanProductClothing";
import ReadMoreManCurrentProduct from "./pages/read-more-man-current-product";
import ReadMoreWomanCurrentProduct from "./pages/read-more-woman-current-product";
import "./normalized.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(true);
  function handleShow() {
    setShow(!show);
  }
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const updateCartItemCount = (newCount) => {
    setCartItemCount(newCount);
  };

  return (
    <>
      <NavBar cartItems={cartItems} cartItemCount={cartItemCount} />
      {show && <MainPage handleShow={handleShow} />}
      <Routes>
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/pick-apprel" element={<PickApparel />} />
        <Route path="/pick-apparel/man-product" element={<MansClothing />} />
        <Route
          path="/pick-apparel/woman-product"
          element={<WomanProductClothing />}
        />
        <Route
          path="/pick-apparel/man-product/read-more/product/:id"
          element={
            <ReadMoreManCurrentProduct
              addToCart={addToCart}
              updateCartItemCount={updateCartItemCount}
            />
          }
        />
        <Route
          path="/pick-apparel/woman-product/read-more/product/:id"
          element={<ReadMoreWomanCurrentProduct />}
        />
      </Routes>
    </>
  );
}
