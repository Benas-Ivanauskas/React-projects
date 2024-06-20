import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import Cart from "./Cart/Cart";
import { useState } from "react";
import { Link } from "react-router-dom";

function HamburgerNavBar() {
  const cartLength = useSelector((state) => state.cart.cart.length);
  const [showCart, setShowCart] = useState(true);
  const handleOpenCart = () => {
    setShowCart((prevCart) => !prevCart);
  };
  return (
    <div className="mt-5 flex justify-start flex-col items-center w-[300px] absolute right-0 top-[60px] h-max bg-white shadow-[0_40px_100px_-0px_rgba(0,0,0,0.5)] xl:hidden ">
      <div className="relative mb-5">
        <input
          type="text"
          className="mt-5 w-[250px] h-[42px] ps-10 border border-black text-base"
          placeholder="SEARCH PRODUCTS"
        />
        <IoIosSearch className="ps-2 h-8 w-8 absolute top-6" />
      </div>
      <div className="flex w-full h-5 items-center justify-start gap-2 my-3 p-4 ">
        <FiUser className="w-7 h-7" />
        <div>
          <p className="uppercase text-base">USER PROFILE</p>
          <p className="font-normal text-gray text-sm">
            We know you as a guest user
          </p>
        </div>
      </div>
      <div className="flex w-full h-5 items-center justify-start gap-2 my-3 p-4 border-b border-lightGray pb-10">
        <IoCartOutline className="w-7 h-7 cursor-pointer" />
        <div className="cursor-pointer" onClick={handleOpenCart}>
          <p className="uppercase text-base">Your cart</p>
          <p className="font-normal  text-orange text-sm">
            ({cartLength}){" "}
            <span className="text-gray">items have been added</span>
          </p>
        </div>
      </div>
      {!showCart && <Cart />}
      <nav className="w-full mb-12 pt-3">
        <ul className="flex flex-col gap-3 items-start ps-8 text-lg ">
          <Link to="/products">
            <li>TEA COLLECTIONS</li>
          </Link>
          <li>ACCESSORIES</li>
          <li>BLOG</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
      <div className="bg-lightGray w-full h-max">
        <div className="flex items-center ps-4 mt-5">
          <img
            className="w-8 h-8"
            src="../images/leaf-logo.png"
            alt="brand logo"
          />
          <span className="ps-3 font-bold text-lg">Brand Name</span>
        </div>
        <p className="p-4 text-sm tracking-wider">
          We offer loose tea leaves of the best quality for your business. With
          a choice of more than 450 different kinds of loose tea, we can make a
          sophisticated selection that fits exactly in your kind of
          establishment.{" "}
        </p>
        <p className="w-max text-sm p-4 text-gray">
          ALL RIGHTS RESEREVED BY Brand Name Co
        </p>
      </div>
    </div>
  );
}

export default HamburgerNavBar;
