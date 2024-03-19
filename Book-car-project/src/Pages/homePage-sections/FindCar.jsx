import "./../../sass/homePage-sections-styles/section.css";
import HomePageCars from "../components/HomePageCars";

import { GoTriangleDown } from "react-icons/go";

function FindCar({ cars }) {
  return (
    <>
      <section>
        <div className="section-description">
          <h2>Find theBest Car for Hire</h2>
          <p>
            Find a wide range of economy and luxury car models available across
            the country, with both short and long term hire options available.
            We pride ourselves on providing world class service to a range of
            customer needs, with car hire deals available all year round. So
            whether you are looking for car hire on a budget, or you want to
            rent a luxury car for an event, Ride Poa has the perfect car for
            you.
          </p>
          <div>
            <button className="new-car-btn">New Car</button>
            <GoTriangleDown className="triangleDown" />
          </div>
        </div>
        <HomePageCars cars={cars} />
      </section>
    </>
  );
}

export default FindCar;
