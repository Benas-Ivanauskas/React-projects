import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Cart from "./Cart/Cart";
import HamburgerNavBar from "./HamburgerNavBar";
import { useSelector } from "react-redux";

function NavBar() {
  const [toggleHamburger, setToggleHamburger] = useState(true);
  const [toggleCart, setToggleCart] = useState(true);
  const cartRef = useRef();

  const cartLength = useSelector((state) => state.cart.cart.length);

  const openHamburgerToggle = () => {
    setToggleHamburger((prevToggle) => !prevToggle);
  };

  const openCartToggle = () => {
    setToggleCart((prevToggleCart) => !prevToggleCart);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setToggleCart(true);
      }
    };

    if (!toggleCart) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleCart]);

  return (
    <nav className="w-full h-20 container mx-auto flex items-center justify-between">
      <Link to="/">
        <div className="flex items-center m-4 md:m-0 ">
          <img src="../images/leaf-logo.png" alt="brand logo" />
          <span className="ps-4">Brand Name</span>
        </div>
      </Link>

      <div className="hidden xl:block">
        <ul className="flex gap-10">
          <Link to="/products">
            <li>TEA COLLECTIONS</li>
          </Link>
          <li>ACCESSORIES</li>
          <li>BLOG</li>
          <li>CONTACT US</li>
        </ul>
      </div>
      <div className=" gap-8 hidden xl:flex">
        <IoIosSearch className="cursor-pointer h-6 w-6" />
        <FiUser className="cursor-pointer h-6 w-6" />
        <div className="relative">
          <IoCartOutline
            className="cursor-pointer h-6 w-6"
            onClick={openCartToggle}
          />

          <span className="absolute text-sm top-[-16px] right-[-10px] text-orange">
            ({cartLength})
          </span>

          {!toggleCart && (
            <div ref={cartRef}>
              <Cart />
            </div>
          )}
        </div>
      </div>
      <div className="block xl:hidden">
        {toggleHamburger ? (
          <GiHamburgerMenu
            className="h-10 w-8 mx-6 md:mx-0 cursor-pointer"
            onClick={openHamburgerToggle}
          />
        ) : (
          <>
            <button onClick={openHamburgerToggle}>
              <IoClose className="h-10 w-8 mx-6 md:mx-0 cursor-pointer" />
            </button>
            <HamburgerNavBar />
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
