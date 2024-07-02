import { useState } from "react";
import CheckOut from "../Components/Checkout-page-components/CheckOut";
import CheckOutDelivery from "../Components/Checkout-page-components/CheckOutDelivery";
import CheckoutPayment from "../Components/Checkout-page-components/CheckoutPayment";
import "./CheckOutPage.css";

function CheckOutPage() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    if (currentIndex >= 3) {
      return currentIndex;
    }
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleBack = () => {
    if (currentIndex <= 1) {
      return currentIndex;
    }
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const displayComponent = (index) => {
    const component = progressCheckoutBar[index - 1].component;
    return component;
  };

  const progressCheckoutBar = [
    {
      checkout: "1. My bag",
      id: 1,
      component: <CheckOut onNext={handleNext} />,
    },
    {
      checkout: "2. Delivery",
      id: 2,
      component: <CheckOutDelivery onNext={handleNext} />,
    },
    {
      checkout: "3. Payment",
      id: 3,
      component: <CheckoutPayment onBack={handleBack} />,
    },
  ];

  return (
    <>
      <div className="w-full flex justify-evenly">
        {progressCheckoutBar.map((tea, index) => {
          return (
            <div
              key={tea.id}
              className={`flex text-xl uppercase ${
                currentIndex === index + 1 ? "active" : ""
              }`}
            >
              {tea.checkout}
            </div>
          );
        })}
      </div>

      <div>{displayComponent(currentIndex)}</div>
    </>
  );
}

export default CheckOutPage;
