import OrderSummary from "./OrderSummary";
import PaymentType from "./PaymentType";
import DeliveryAndRetour from "./DeliveryAndRetour";
import CustomButton from "../Buttons-components/CustomButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CheckoutEmpty from "./CheckoutEmpty";
import "./CheckOut.css";
import CheckoutInfo from "./CheckoutInfo";
import Button from "../Buttons-components/Button";

export default function CheckOut({ onNext }) {
  const cartItems = useSelector((state) => state.cart.cart);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.totalPrice;
  }, 0);

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="w-full flex flex-wrap justify-center my-14 ">
          <div className="flex  flex-col w-[400px] sm:w-[500px] mb-10 p-5">
            {cartItems.map((item, index) => (
              <CheckoutInfo key={index} item={item} />
            ))}
            <Link to="/products">
              <CustomButton className="w-full" text="Back to shopping" />
            </Link>
          </div>
          <div className="flex flex-col items-center ms-0 lg:ms-12">
            <OrderSummary totalPrice={totalPrice} />
            <Button className="w-full" onClick={onNext}>
              CheckOut
            </Button>
            <PaymentType />
            <DeliveryAndRetour />
          </div>
        </div>
      ) : (
        <CheckoutEmpty />
      )}
    </>
  );
}
