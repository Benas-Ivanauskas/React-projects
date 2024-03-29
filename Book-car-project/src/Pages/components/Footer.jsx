import "./../../sass/components-styles/footer.css";
import { IoIosArrowForward } from "react-icons/io";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { AiFillGooglePlusSquare } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="about-us">
            <h2>About us</h2>
            <nav>
              <ol>
                <li>
                  <a href="#">
                    <IoIosArrowForward />
                    About us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IoIosArrowForward /> FAQS
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IoIosArrowForward /> Privacy
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IoIosArrowForward /> Terms of use
                  </a>
                </li>
              </ol>
            </nav>
          </div>
          <div className="subscribe">
            <h3>SUBSCRIBE NEWSLETTER</h3>
            <button className="email-btn">Enter Email Address</button>
            <button className="subscribe-btn">Subscribe</button>
            <p>
              *We send great deals and latest auto news to our subscribed users
              every week.
            </p>
          </div>
        </div>
        <div className="connect-container">
          <div>
            <p>Copyright © 2024 Ben Ten. All Rights Reserved</p>
          </div>
          <div>
            <ul>
              <h4>Connect with Us:</h4>
              <li>
                <RiFacebookBoxFill className="facebiij-icon" />
              </li>
              <li>
                <FaTwitter className="twitter-icon" />
              </li>
              <li>
                <AiFillGooglePlusSquare className="google-icon" />
              </li>
              <li>
                <FaInstagram className="instagram-icon" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
