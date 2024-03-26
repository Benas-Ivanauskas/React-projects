import React, { useState } from "react";
import "./Footer.css";
import { IoHomeOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  const [activeBtn, setActiveBtn] = useState("");

  const handleButtonClick = (filterType) => {
    setActiveBtn(filterType);
  };
  return (
    <footer>
      <div className="footer-container">
        <Link to="/home-page" style={{ textDecoration: "none" }}>
          <button
            className={`home-btn ${
              activeBtn === "Home" ? "activeFooterBtn" : ""
            }`}
            onClick={() => handleButtonClick("Home")}
          >
            <IoHomeOutline className="nav-icon" /> Home
          </button>
        </Link>
        <Link to="/watch-list" style={{ textDecoration: "none" }}>
          <button
            className={`watchList-btn ${
              activeBtn === "Watch list" ? "activeFooterBtn" : ""
            } `}
            onClick={() => handleButtonClick("Watch list")}
          >
            <CiBookmark className="nav-icon" /> Watch list
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
