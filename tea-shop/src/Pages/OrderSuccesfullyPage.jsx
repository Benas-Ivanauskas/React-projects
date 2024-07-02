import CustomButton from "../Components/Buttons-components/CustomButton";
import { Link } from "react-router-dom";

function OrderSuccesfullyPage() {
  return (
    <div className="text-center min-h-[609px] flex justify-center flex-col items-center">
      <h2 className="text-5xl my-12">Thank you!</h2>
      <p className="text-xl mb-12">
        We received your order and will start preparing your package right away.
        You will receive a confirmation email in a moment.
      </p>
      <Link to="/">
        <CustomButton text="Back to the shop" />
      </Link>
    </div>
  );
}

export default OrderSuccesfullyPage;
