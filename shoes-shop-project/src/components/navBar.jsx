import { useState } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

export default function NavBar({ cartItems, cartItemCount }) {
  // eslint-disable-next-line no-unused-vars
  const [showMenu, setShowMenu] = useState(true);
  const [showSideBar, setShowSideBar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  function handleShowMenu() {
    setShowSideBar(!showSideBar);
  }
  function handleCloseSideBar() {
    setShowSideBar(false);
  }
  function handleOpenShopCart() {
    setShowCart(!false);
  }
  function handleCloseShopCart() {
    setShowCart(false);
  }
  return (
    <>
      <header>
        <div className="header-container flex-container">
          <div className="logo">Chill Collection</div>
          <nav>
            <ul className="navigation-list">
              <li>
                <button className="cart-button" onClick={handleOpenShopCart}>
                  Cart {cartItemCount} items
                </button>
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
        {showCart && (
          <div className="shopping-cart">
            <button onClick={handleCloseShopCart}>X</button>
            <h1>Shopping cart</h1>
            <h2>Items in your cart:</h2>
            <ul>
              {cartItems.map((item, id) => (
                <li key={id}>
                  {item.title} - {item.price} Eur - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
