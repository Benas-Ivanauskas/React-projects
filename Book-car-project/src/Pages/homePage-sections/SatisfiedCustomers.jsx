import "./../../sass/homePage-sections-styles/satisfied.css";
import { TbLuggage } from "react-icons/tb";
import { FaCarAlt } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import SatisfiedCard from "../components/SatisfiedCard";

function SatisfiedCustomers() {
  return (
    <>
      <div className="satisfied">
        <div className="satisfied-costumers">
          <SatisfiedCard
            icon={TbLuggage}
            count="40+"
            description="Years in Business"
          />
          <SatisfiedCard icon={FaCarAlt} count="1500+" description="Bookings" />
          <SatisfiedCard
            icon={FaCarAlt}
            count="1000+"
            description="Completed Journeys"
          />
          <SatisfiedCard
            icon={IoPersonCircleOutline}
            count="40+"
            description="Years in Business"
          />
        </div>
        <div className="customers-feedback">
          <h2>Our Satisfied Customers</h2>
        </div>
      </div>
    </>
  );
}

export default SatisfiedCustomers;
