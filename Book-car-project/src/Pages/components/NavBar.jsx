import { Link } from "react-router-dom";
import "../../sass/components-styles/navBar.css";
import { MdArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { toast } from "react-toastify";

export default function NavBar() {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleLogout = () => {
    setUsername("");
    setPassword("");
    setLoggedIn(false);
    setShowLogin(false);
  };

  const proceedLogin = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    if (validate()) {
      fetch("http://localhost:3000/users/" + username)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("User not found");
          }
        })
        .then((user) => {
          setUsername(user.name);
          setLoggedIn(true);
          toast.success("Login successful!");
        })
        .catch((err) => {
          toast.error("Login failed due to: " + err.message);
        });
    }

    setUsername("");
    setPassword("");
    setShowLogin(false);
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please enter User Name");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please enter Password");
    }
    return result;
  };

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
          {!loggedIn ? (
            <button className="login-btn" onClick={handleShowLogin}>
              Login
              <MdArrowDropDown className="arrowDropDown" />
            </button>
          ) : (
            <div className="logged-in-user">
              <span className="user-name">{username}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Log Out
              </button>
            </div>
          )}
        </div>
        <div className="burger">
          <RxHamburgerMenu className="burger-icon" />
        </div>
        {showLogin && (
          <div className="login-form">
            <form onSubmit={proceedLogin}>
              <div className="form-header">
                <h2>User Login</h2>
              </div>
              <div className="form-group">
                <label>
                  User Name <span className="error-message">*</span>
                </label>
                <input
                  type="text"
                  placeholder="User Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label>
                  Password <span className="error-message">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="submit">
                <button type="submit" className="login">
                  Login
                </button>
                <span className="new-user">Register</span>
              </div>
            </form>
          </div>
        )}
      </header>
    </>
  );
}
