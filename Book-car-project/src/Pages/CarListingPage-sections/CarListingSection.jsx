/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CarListingPickCar from "../components/CarListingPickCar";
import "./../../sass/carlisting-section/section.css";

const CarListingSection = ({ cars }) => {
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectFuel, setSelectFuel] = useState("");

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

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    let filteredCarsResult = cars;

    if (searchInput) {
      filteredCarsResult = filteredCarsResult.filter((car) =>
        car.brand.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    if (selectedBrand) {
      filteredCarsResult = filteredCarsResult.filter((car) =>
        car.brand.toLowerCase().includes(selectedBrand.toLowerCase())
      );
    }

    if (selectFuel) {
      filteredCarsResult = filteredCarsResult.filter((car) =>
        car.fuel.toLowerCase().includes(selectFuel.toLowerCase())
      );
    }

    setFilteredCars(filteredCarsResult);
  }, [searchInput, selectedBrand, selectFuel, cars]);

  return (
    <section className="car-listing-section">
      <div className="searchBar">
        <input type="search" placeholder="Search" onChange={handleInput} />
      </div>
      <div className="select-filter">
        <label>
          <span>Select brand:</span>
          <select
            value={selectedBrand}
            onChange={(e) => {
              setSelectedBrand(e.target.value);
            }}
          >
            <option value="">All brands</option>
            <option value="Range rover">Range rover</option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Porsche">Porsche</option>
          </select>
        </label>
        <label>
          <span>Select fuel type:</span>
          <select
            value={selectFuel}
            onChange={(e) => {
              setSelectFuel(e.target.value);
            }}
          >
            <option value="">All fuel type</option>
            <option value="Diesel">Diesel</option>
            <option value="Petrol">Petrol</option>
          </select>
        </label>
      </div>
      <div className="section-container">
        <CarListingPickCar
          cars={cars}
          page={page}
          filteredCars={filteredCars}
        />
      </div>
      {filteredCars.length > 0 ? (
        <div className="pagination">
          <button
            className="left-btn"
            onClick={() => selectPageHandler(page - 1)}
          >
            ◀
          </button>
          {[...Array(Math.ceil(filteredCars.length / 2))].map((_, i) => {
            return (
              <button
                className={
                  page === i + 1
                    ? "pagination-selected"
                    : "pagination-not-selected"
                }
                onClick={() => selectPageHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </button>
            );
          })}
          <button
            className="right-btn"
            onClick={() => selectPageHandler(page + 1)}
          >
            ▶
          </button>
        </div>
      ) : (
        <div className="no-results-message">No results found. Try another!</div>
      )}
    </section>
  );
};

export default CarListingSection;
