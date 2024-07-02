import { useSelector } from "react-redux";
import OrderSummary from "./OrderSummary";
import ShippingForm from "./ShippingForm";

export default function CheckOutDelivery({ onNext }) {
  const cartItems = useSelector((state) => state.cart.cart);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.totalPrice;
  }, 0);

  return (
    <div className="checkout flex w-full my-14 ms-auto justify-center flex-wrap min-h-[500px]">
      <ShippingForm onNext={onNext} />
      <div className="mt-10">
        <OrderSummary totalPrice={totalPrice} />
      </div>
    </div>
  );
}
