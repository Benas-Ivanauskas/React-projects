import { useSelector } from "react-redux";
import OrderSummary from "./OrderSummary";
import CheckoutOutDeliveryDetails from "./CheckoutPaymetDeliveryDetails";
import CheckoutPaymentForm from "./CheckoutPaymentForm";
import CheckoutPaymentType from "./CheckoutPaymentType";

function CheckoutPayment({ onBack }) {
  const cartItems = useSelector((state) => state.cart.cart);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.totalPrice;
  }, 0);

  return (
    <div className="flex checkout flex-wrap w-full justify-center md:justify-center gap-12 md:gap-4 m-0 md:m-12 mt-[60px] min-h-[485px]">
      <div className="w-[200px] md:me-12 ">
        <CheckoutOutDeliveryDetails onBack={onBack} />
      </div>
      <div className="w-[330px] sm:w-[370px] me-12 ms-5 ">
        <h3>Payment type</h3>
        <div className="border mb-5 border-gray p-2 flex justify-center">
          <img src="images/Visa.png" alt="visa card" />
        </div>
        <div className="border border-gray p-5">
          <CheckoutPaymentType />
          <CheckoutPaymentForm />
        </div>
      </div>
      <OrderSummary totalPrice={totalPrice} />
    </div>
  );
}

export default CheckoutPayment;
