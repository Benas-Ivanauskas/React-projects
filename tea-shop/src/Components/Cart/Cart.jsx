import { useSelector } from "react-redux";
import Button from "../Buttons-components/Button";
import CartAddedProduct from "./CartAddedProduct";
import CartTotal from "./CartTotal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Cart() {
  const [closeCart, setCloseCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);

  const isEmptyCart = cartItems.length === 0;

  const navigate = useNavigate();

  const handlePurchase = () => {
    setCloseCart(true);
    navigate("/checkout");
  };

  return (
    <>
      {!closeCart && (
        <div className="xl:p-4 p-3 w-full border-b xl:border-t border-lightGray pb-5 xl:absolute xl:top-[-30px] xl:right-[-20px] h-max xl:w-[450px]  bg-white xl:shadow-[-0px_10px_20px_-0px_rgba(0,0,0,0.5)]">
          <h3 className="text-xl mb-5">My Cart</h3>
          {isEmptyCart ? (
            <>
              <p className="text-center my-3 font-bold text-xl">
                Your cart is empty!
              </p>
              <p className="text-center my-3 text-lg">
                Please add products to cart
              </p>
            </>
          ) : (
            <>
              <CartAddedProduct />
              <CartTotal />
              <Button className="w-full" onClick={handlePurchase}>
                {isEmptyCart ? "First you need to add to cart" : "Purchase"}
              </Button>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Cart;
