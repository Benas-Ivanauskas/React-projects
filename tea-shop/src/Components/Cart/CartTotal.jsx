import { useSelector } from "react-redux";

function CartTotal() {
  const cartItems = useSelector((state) => state.cart.cart);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.totalPrice;
  }, 0);

  return (
    <div className="flex flex-col gap-5 mb-5">
      <div className="flex justify-between mt-5">
        <span className="text:xl xl:text-2xl font-bold">Total price</span>
        <span className="text:xl xl:text-2xl font-bold">
          {totalPrice.toFixed(2)}€
        </span>
      </div>
    </div>
  );
}

export default CartTotal;
