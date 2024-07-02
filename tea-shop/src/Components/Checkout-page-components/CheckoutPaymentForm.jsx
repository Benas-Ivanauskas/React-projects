import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addCVC,
  addExpiryDate,
  addPaymentCard,
} from "../../features/payment/paymentSlice";
import Button from "../Buttons-components/Button";
import { useNavigate } from "react-router-dom";
import { clearCartState } from "../../features/cart/cartSlice";

export default function CheckoutPaymentForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState("");

  const formatCardNumber = (value) => {
    const numericValue = value.replace(/\D/g, "");
    let formattedValue = numericValue.replace(/(\d{4})/g, "$1 - ").trim();
    formattedValue = formattedValue.replace(/-$/, "");
    return formattedValue;
  };

  const formatExpiryDate = (value) => {
    const numericValue = value.replace(/\D/g, "");
    let formattedValue = numericValue.replace(/(\d{2})/, "$1/");
    return formattedValue;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "cardNumber") {
      const formattedValue = formatCardNumber(value);
      setCardNumber(formattedValue);
      dispatch(addPaymentCard(value));
    } else if (name === "expiryDate") {
      const formattedValue = formatExpiryDate(value);
      setExpiryDate(formattedValue);
      dispatch(addExpiryDate(value));
    } else if (name === "cvc") {
      setCvc(value);
      dispatch(addCVC(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cardNumber || !expiryDate || !cvc) {
      setError("All fields are required. Please fill in all fields.");
      return;
    }

    dispatch(addPaymentCard(cardNumber));
    dispatch(addExpiryDate(expiryDate));
    dispatch(addCVC(cvc));

    navigate("/completed-order");
    dispatch(clearCartState());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-[220px] sm:w-[280px] ms-5 mb-8">
        <span>Card Number</span>
        <div className="flex gap-3 border-b border-gray justify-between">
          <input
            className="w-full ps-1"
            type="text"
            placeholder="XXXX - XXXX - XXXX - XXXX"
            name="cardNumber"
            value={cardNumber}
            onChange={handleChange}
            maxLength={25}
          />
        </div>
      </div>
      <div className="mb-3 flex flex-row justify-between w-[200px] sm:w-[280px] ms-5">
        <div className="flex flex-col w-[100px] border-b border-gray">
          <span>Expired Date</span>
          <input
            className="w-full ps-1"
            type="text"
            placeholder="MM/YY"
            name="expiryDate"
            value={expiryDate}
            onChange={handleChange}
            maxLength={5}
          />
        </div>
        <div className="flex flex-col w-[80px] border-b border-gray">
          <span>CVC</span>
          <input
            className="w-full ps-1"
            type="text"
            placeholder="XXX"
            name="cvc"
            value={cvc}
            onChange={handleChange}
            maxLength={3}
          />
        </div>
      </div>
      <Button className="mt-2 w-full" type="submit">
        Pay
      </Button>
      {error && <p className="mt-3 text-red-500">{error}</p>}
    </form>
  );
}
