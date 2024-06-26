import { useRef, useState } from "react";
import Cart from "../Cart/Cart";
import CartButton from "./CartButton";
import CartItemsOut from "./CartItemsCount";

export default function CartActions() {
  const [showCartReview, setShowCartReview] = useState(true);
  const cartRef = useRef();

  const openCartToggle = () => {
    setShowCartReview((prevToggleCart) => !prevToggleCart);
  };

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setShowCartReview(true);
    }
  };

  if (!showCartReview) {
    document.addEventListener("mousedown", handleClickOutside);
  } else {
    document.removeEventListener("mousedown", handleClickOutside);
  }

  return (
    <div className="relative">
      <CartButton openCartToggle={openCartToggle} />
      <CartItemsOut />
      {!showCartReview && (
        <div ref={cartRef}>
          <Cart />
        </div>
      )}
    </div>
  );
}
