import { useParams } from "react-router-dom";
import "./../sass/CurrentCarPage/CurrentCarPage.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function CurrentCarPage({ cars }) {
  const { id } = useParams();

  const currentCar = cars.find((car) => car.id === id);
  console.log(currentCar);

  if (!currentCar) {
    return <div>Car not found</div>;
  }

  return (
    <div className="current-car-page">
      <div className="current-car-container">
        <div className="about-car">
          <h2>Range Rover Sport</h2>
          <div className="specification">
            <p>
              <FaRegCalendarAlt /> 2022 model year
            </p>
            <p>
              <FaPersonCirclePlus /> 7 seats
            </p>
            <p>
              <MdOutlineMiscellaneousServices /> petrol
            </p>
          </div>
          <div className="car-description">
            <div>
              <button className="active">Overview</button>
              <button>Accessories</button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam iure
              repellat quia possimus aspernatur officia reprehenderit maiores
              dicta provident laboriosam.
            </p>
          </div>
        </div>
        <div className="form-container">
          <div>
            <p>
              <FaLocationDot /> Location
            </p>
            <p>$200 per day</p>
          </div>
          <form action="">
            <label htmlFor="pickUp">
              Pick up Location
              <select name="pickUp" id="pickUp">
                <option value="Vilnius">Vilnius</option>
                <option value="Kaunas">Kaunas</option>
              </select>
            </label>
            <label htmlFor="pickDate">
              From date
              <input type="date" name="pickDate" />
            </label>
            <label htmlFor="toDate">
              To date
              <input type="date" name="toDate" />
            </label>
            <label htmlFor="message">
              Message
              <textarea
                name="message"
                id="message"
                cols="20"
                rows="5"
                placeholder="Type your message"
              ></textarea>
            </label>
            <button>Book</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CurrentCarPage;
