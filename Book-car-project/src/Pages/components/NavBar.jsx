import { Link } from "react-router-dom";
import "../../sass/components-styles/navBar.css";
import { MdArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
  return (
    <>
      <header>
        <div className="header-container">
          <nav>
            <ul>
              <li>
                <Link to="/homepage">Home</Link>
              </li>
              <li>
                <Link to="/car-listing">Car listing</Link>
              </li>
              <li>
                <Link to="/about-us">About us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact us</Link>
              </li>
              <li>
                <Link to="/FAQS">FAQS</Link>
              </li>
            </ul>
          </nav>
          <button className="login-btn">
            Login
            <MdArrowDropDown className="arrowDropDown" />
          </button>
        </div>
        <div className="burger">
          <RxHamburgerMenu className="burger-icon" />
        </div>
      </header>
    </>
  );
}
