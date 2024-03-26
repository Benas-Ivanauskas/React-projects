// Header.js
import React, { useState } from "react";
import "./Header.css";
import { CiSearch } from "react-icons/ci";

const Header = ({ filter, handleFilterButtonClick }) => {
  const [activeFilter, setActiveFilter] = useState("");

  const handleButtonClick = (filterType) => {
    setActiveFilter(filterType);
    handleFilterButtonClick(filterType);
  };
  return (
    <header>
      <h1>What do you want to watch?</h1>
      <div className="search-bar">
        <label htmlFor="movie">
          <input
            type="search"
            id="movie"
            placeholder="Search"
            onChange={filter}
          />
        </label>
        <button className="search-btn">
          <CiSearch />
        </button>
      </div>
      <div className="filter-btn">
        <button
          className={activeFilter === "Top 5" ? "active" : ""}
          onClick={() => handleButtonClick("Top 5")}
        >
          Top 5
        </button>
        <button
          className={activeFilter === "Top 10" ? "active" : ""}
          onClick={() => handleButtonClick("Top 10")}
        >
          Top 10
        </button>
        <button
          className={activeFilter === "All" ? "active" : ""}
          onClick={() => handleButtonClick("All")}
        >
          All movies
        </button>
      </div>
    </header>
  );
};

export default Header;
