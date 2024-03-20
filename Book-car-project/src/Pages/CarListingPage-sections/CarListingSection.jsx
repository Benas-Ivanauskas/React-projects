/* eslint-disable react/prop-types */
import { useState } from "react";
import CarListingPickCar from "../components/CarListingPickCar";
import "./../../sass/carlisting-section/section.css";

const CarListingSection = ({ cars }) => {
  const [page, setPage] = useState(1);

  const selectPageHandler = (selectedPage) => {
    if (selectedPage <= 0) {
      setPage(1);
    } else if (selectedPage > Math.ceil(cars.length / 2)) {
      setPage(Math.ceil(cars.length / 2));
    } else if (selectedPage === page) {
      return;
    } else {
      setPage(selectedPage);
    }
  };

  return (
    <section className="car-listing-section">
      <div className="section-container">
        <CarListingPickCar cars={cars} page={page} />
      </div>
      {cars.length > 0 && (
        <div className="pagination">
          <button onClick={() => selectPageHandler(page - 1)}>⬅</button>
          {[...Array(Math.round(cars.length / 2))].map((_, i) => {
            return (
              <button
                className={page === i + 1 ? "pagination-selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </button>
            );
          })}
          <button onClick={() => selectPageHandler(page + 1)}>➡</button>
        </div>
      )}
    </section>
  );
};

export default CarListingSection;
