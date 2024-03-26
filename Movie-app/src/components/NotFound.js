import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/home-page");
  };
  return (
    <div className="notfound-container">
      <h1>That page doesn't exist!</h1>
      <p>Sorry, the page you were looking for could not be found.</p>
      <button onClick={navigateHome}>Back to home page</button>
    </div>
  );
}

export default NotFound;
