import { Link } from "react-router-dom";
import "./../../sass/homePage-sections-styles/banner.css";

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="banner-container">
          <h1>Need a car?</h1>
          <h3>Big or small we have them all.</h3>
          <Link to="/car-listing">
            <button className="banner-btn">Book now!</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Banner;
