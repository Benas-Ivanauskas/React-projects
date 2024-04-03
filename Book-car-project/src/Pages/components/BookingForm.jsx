import { useState } from "react";
import { toast } from "react-toastify";

function BookingForm() {
  const [location, setLocation] = useState("");
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
  );
}

export default BookingForm;
