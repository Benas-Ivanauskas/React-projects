import { Link } from "react-router-dom";
import CustomButton from "../Buttons-components/CustomButton";

function CheckoutEmpty() {
  return (
    <div className="checkout w-full flex flex-col items-center justify-center my-14 min-h-[469px] ">
      <p className="mb-5 text-3xl">Your cart is empty.</p>
      <Link to="/products">
        <CustomButton className="w-full" text="BACK TO SHOPPING" />
      </Link>
    </div>
  );
}

export default CheckoutEmpty;
