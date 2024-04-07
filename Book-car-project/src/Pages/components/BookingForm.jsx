import { useState } from "react";
import { toast } from "react-toastify";
import { FaLocationDot } from "react-icons/fa6";

function BookingForm({ currentCar }) {
  const [location, setLocation] = useState("Vilnius");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [message, setMessage] = useState("");

  const handleBookForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/bookForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ location, fromDate, toDate, message }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
      toast.success("Booking completed successfully!");
      setLocation("");
      setFromDate("");
      setToDate("");
      setMessage("");
    } catch (error) {
      toast.error("Booking failed!: " + error.message);
    }
  };

  return (
    <div className="form-container">
      <div>
        <p>
          <FaLocationDot /> {location}
        </p>
        <p>${currentCar.cost} per day</p>
      </div>

      <form onSubmit={handleBookForm}>
        <label htmlFor="pickUp">
          Pick up Location
          <select
            name="pickUp"
            id="pickUp"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="Vilnius">Vilnius</option>
            <option value="Kaunas">Kaunas</option>
          </select>
        </label>
        <label htmlFor="pickDate">
          From date
          <input
            type="date"
            name="pickDate"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            required
          />
        </label>
        <label htmlFor="toDate">
          To date
          <input
            type="date"
            name="toDate"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            required
          />
        </label>
        <label htmlFor="message">
          Message
          <textarea
            name="message"
            id="message"
            cols="20"
            rows="5"
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </label>
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default BookingForm;
