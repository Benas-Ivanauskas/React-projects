import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setCity,
  setCountry,
  setEmail,
  setFirstName,
  setLastName,
  setPostCode,
  setStreet,
} from "../../features/deliveryDetails/deliveryDetailsSlice";
import Button from "../Buttons-components/Button";

export default function ShippingForm({ onNext }) {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    postCode: "",
    city: "",
    country: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.street ||
      !formData.postCode ||
      !formData.city ||
      !formData.country ||
      !formData.email
    ) {
      e.preventDefault();
      setError("All fields are required. Please fill in all fields.");
      return;
    }

    e.preventDefault();
    dispatch(setFirstName(formData.firstName));
    dispatch(setLastName(formData.lastName));
    dispatch(setStreet(formData.street));
    dispatch(setPostCode(formData.postCode));
    dispatch(setCity(formData.city));
    dispatch(setCountry(formData.country));
    dispatch(setEmail(formData.email));
    onNext();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[400px] box-border ms-[100px] lg:ms-0 me-[100px]"
      >
        <h4 className="text-xl mb-4 ps-1">Shipping Address</h4>
        <input
          className="border border-gray text-base p-2 mb-4"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          className="border border-gray text-base p-2 mb-4"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          className="border border-gray text-base p-2 mb-4"
          type="text"
          placeholder="Street"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
        <div className="flex mb-4 box-border gap-4">
          <input
            className="border border-gray text-base p-2 w-full"
            type="number"
            placeholder="PostCode"
            name="postCode"
            value={formData.postCode}
            onChange={handleChange}
          />
          <input
            className="border border-gray text-base p-2 w-full"
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <input
          className="border border-gray text-base p-2 mb-4"
          type="text"
          placeholder="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
        <h4 className="text-xl mb-4 ps-1">Contact Information</h4>
        <input
          className="border border-gray text-base p-2 mb-4"
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Button type="submit" className="w-full">
          Go to payment
        </Button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
    </>
  );
}
