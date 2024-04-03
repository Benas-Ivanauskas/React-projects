import { useParams } from "react-router-dom";
import "./../sass/CurrentCarPage/CurrentCarPage.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import BookingForm from "./components/BookingForm";

function CurrentCarPage({ cars }) {
  const { id } = useParams();
  const [text, setText] = useState("");
  const [activeButton, setActiveButton] = useState("overview");

  const currentCar = cars.find((car) => car.id === id);

  useEffect(() => {
    if (currentCar) {
      setText(currentCar.overview);
    }
  }, [currentCar]);

  if (!currentCar) {
    return <div>Car not found</div>;
  }

  const handleClickOverview = () => {
    let text = currentCar.overview;
    setText(text);
    setActiveButton("overview");
  };

  const handleClickAccessories = () => {
    let text = currentCar.accessories;
    setText(text);
    setActiveButton("accessories");
  };

  return (
    <div className="current-car-page">
      <div className="current-car-container">
        <div className="about-car">
          <h2>{currentCar.brand}</h2>
          <div className="specification">
            <p>
              <FaRegCalendarAlt /> {currentCar.model} model year
            </p>
            <p>
              <FaPersonCirclePlus /> {currentCar.seats} seats
            </p>
            <p>
              <MdOutlineMiscellaneousServices /> {currentCar.fuel}
            </p>
          </div>
          <div className="car-description">
            <div>
              <button
                className={activeButton === "overview" ? "active" : ""}
                onClick={handleClickOverview}
              >
                Overview
              </button>
              <button
                className={activeButton === "accessories" ? "active" : ""}
                onClick={handleClickAccessories}
              >
                Accessories
              </button>
            </div>
            <p>{text}</p>
          </div>
        </div>
        <div className="form-container">
          <div>
            <p>
              <FaLocationDot /> {currentCar.location}
            </p>
            <p>${currentCar.cost} per day</p>
          </div>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}

export default CurrentCarPage;
