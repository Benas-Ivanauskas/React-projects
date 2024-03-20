import { IoPersonAddSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const CarListingPickCar = ({ cars, page }) => {
  const displayTwoCars = cars.slice(page * 2 - 2, page * 2);
  return (
    <div className="cars">
      {displayTwoCars.map((car, index) => {
        return (
          <div className="car" key={index}>
            <div className="car-img">
              <img src={car.image} alt="asd" />
            </div>
            <div className="car-description">
              <h2>{car.brand}</h2>
              <h3>${car.cost} perday</h3>
              <div className="infomartion-about-car">
                <div>
                  <p>
                    <IoPersonAddSharp /> {car.seats} Seats
                  </p>
                  <p>
                    <FaRegCalendarAlt /> {car.model} model
                  </p>
                </div>
                <div>
                  <p>
                    <FaCarAlt /> {car.fuel} engine
                  </p>
                  <p>
                    <FaLocationDot /> {car.location}
                  </p>
                </div>
              </div>
              <button className="view-details-btn">View Details</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarListingPickCar;
