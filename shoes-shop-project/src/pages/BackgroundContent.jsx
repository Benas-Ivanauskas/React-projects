import { Link } from "react-router-dom";
import "./BackgroundContent.css";

// eslint-disable-next-line react/prop-types
export default function MainPage({ handleShow }) {
  return (
    <>
      <main className="main">
        <div className="main-container">
          <div>
            <h1>Chill Collection</h1>
            <h3>Premium comfort for any season</h3>
          </div>
          <Link to="/pick-apprel">
            <button className="btn" onClick={handleShow}>
              SHOP NOW
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
