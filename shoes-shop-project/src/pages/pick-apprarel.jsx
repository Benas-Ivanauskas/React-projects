import "./pick-apparel.css";
import Button from "../components/button";
import { Link } from "react-router-dom";

export default function PickApparel({ children }) {
  return (
    <main className="main-pickGender">
      <div className="container">
        <div className="card-woman">
          <h1>Woman's apparel</h1>
          <Link to="/pick-apparel/woman-product">
            <Button>SHOP NOW</Button>
          </Link>
        </div>
        <div className="card-man">
          <h1>Man's apparel</h1>
          <Link to="/pick-apparel/man-product">
            <Button>SHOP NOW</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
