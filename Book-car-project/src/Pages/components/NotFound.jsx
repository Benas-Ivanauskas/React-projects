import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>Back to home page</p> <Link to="/homepage">Home Page</Link>
    </div>
  );
}

export default NotFound;
