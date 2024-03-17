import "./../../sass/homePage-sections-styles/satisfied.css";
import { TbLuggage } from "react-icons/tb";
import { FaCarAlt } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

function SatisfiedCustomers() {
  return (
    <>
      <div className="satisfied">
        <div className="satisfied-costumers">
          <div className="card">
            <TbLuggage className="luggage-icon" />
            <div>
              <h3>40+</h3>
              <p>Years in Business</p>
            </div>
          </div>
          <div className="card">
            <FaCarAlt className="car-icon" />
            <div>
              <h3>1500+</h3>
              <p>Bookings</p>
            </div>
          </div>
          <div className="card">
            <FaCarAlt className="car-icon" />
            <div>
              <h3>1000+</h3>
              <p>Completed Journeys</p>
            </div>
          </div>
          <div className="card">
            <IoPersonCircleOutline className="person-icon" />
            <div>
              <h3>+600</h3>
              <p>Years in Business</p>
            </div>
          </div>
        </div>
        <div className="customers-feedback">
          <h2>Our Satisfied Customers</h2>
        </div>
      </div>
    </>
  );
}

export default SatisfiedCustomers;
