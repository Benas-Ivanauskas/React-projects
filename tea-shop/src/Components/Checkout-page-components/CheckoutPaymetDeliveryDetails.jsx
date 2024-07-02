import { useSelector } from "react-redux";

export default function CheckoutPaymetDeliveryDetails({ onBack }) {
  const deliveryDetails = useSelector((state) => state.delivery);
  return (
    <>
      <h3 className="text-xl mb-3">Delivery Details</h3>
      <h4 className="text-base font-bold mb-2">Shipping address</h4>
      <p className="w-auto flex flex-col mb-8 ">
        <span>First name - {deliveryDetails.firstName}</span>
        <span>Last name - {deliveryDetails.lastName}</span>
        <span>Country - {deliveryDetails.country}</span>
        <span>City - {deliveryDetails.city}</span>
        <span>Street - {deliveryDetails.street}</span>
        <span>Post code - {deliveryDetails.postCode}</span>
      </p>
      <h4 className="text-base font-bold mb-2">Contact Information</h4>
      <p>{deliveryDetails.email}</p>
      <button
        onClick={onBack}
        className="mt-5 ms-6 text-base uppercase text-yellow-600"
      >
        Edit detailes
      </button>
    </>
  );
}
