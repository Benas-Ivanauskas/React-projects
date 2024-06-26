import Cart from "../Cart/Cart";
import { useState } from "react";
import SearchFilter from "./SearchField";
import HamburgerReviewCart from "./HamburgerReviewCart";
import HamburgerUserProfile from "./HamburgerUserProfile";
import HamburgerNavigation from "./HamburgerNavigation";
import HamburgerBrandLink from "./HamburgerBrandLink";
import HamburgerInformation from "./HamburgerInformation";

function HamburgerNavBar() {
  const [showCart, setShowCart] = useState(true);
  const handleOpenCart = () => {
    setShowCart((prevCart) => !prevCart);
  };
  return (
    <div className="mt-5 flex justify-start flex-col items-center w-[300px] absolute right-0 top-[60px] h-max bg-white shadow-[0_40px_100px_-0px_rgba(0,0,0,0.5)] xl:hidden ">
      <div className="relative mb-5">
        <SearchFilter />
      </div>
      <div className="flex w-full h-5 items-center justify-start gap-2 my-3 p-4 ">
        <HamburgerUserProfile />
      </div>
      <div className="flex w-full h-5 items-center justify-start gap-2 my-3 p-4 border-b border-lightGray pb-10">
        <HamburgerReviewCart handleOpenCart={handleOpenCart} />
      </div>
      {!showCart && <Cart />}
      <HamburgerNavigation />
      <div className="bg-lightGray w-full h-max">
        <HamburgerBrandLink />
        <HamburgerInformation />
      </div>
    </div>
  );
}

export default HamburgerNavBar;
