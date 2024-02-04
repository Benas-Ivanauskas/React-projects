import { useState } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  // eslint-disable-next-line no-unused-vars
  const [showMenu, setShowMenu] = useState(true);
  const [showSideBar, setShowSideBar] = useState(false);
  function handleShowMenu() {
    setShowSideBar(!showSideBar);
  }
  function handleCloseSideBar() {
    setShowSideBar(false);
  }
  return (
    <>
      <header>
        <div className="header-container flex-container">
          <div className="logo">Chill Collection</div>
          <nav>
            <ul className="navigation-list">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  // eslint-disable-next-line react/no-unknown-property
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                  color="white"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  fill="currentColor"
                  // eslint-disable-next-line react/no-unknown-property
                  class="bi bi-cart2"
                  viewBox="0 0 16 16"
                  color="white"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                </svg>
              </li>
              {showMenu && (
                <li>
                  <button className="navBar-btn" onClick={handleShowMenu}>
                    {showSideBar ? "✖" : "Menu"}
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div>
          {showSideBar && (
            <nav className="sideBar" onClick={handleCloseSideBar}>
              <ul className="sideBar-navigation-list">
                <li>
                  <Link to="/pick-apprel">
                    <button>Home page</button>
                  </Link>
                </li>
                <li>
                  <Link to="/pick-apparel/man-product">
                    <button>Man's apparel</button>
                  </Link>
                </li>
                <li>
                  <Link to="/pick-apparel/woman-product">
                    <button>Woman's apparel</button>
                  </Link>
                </li>
                <li>
                  <button>Cart</button>
                </li>
                <li>
                  <button>Contacts</button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
