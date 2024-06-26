import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import BrandLink from "./BrandLink";
import BarNavigation from "./BarNavigation";
import CartActions from "./CartActions";
import ShowHamburger from "./ShowHamburger";

function NavBar() {
  return (
    <nav className="w-full h-20 container mx-auto flex items-center justify-between">
      <BrandLink />

      <div className="hidden xl:block">
        <BarNavigation />
      </div>

      <div className=" gap-8 hidden xl:flex">
        <IoIosSearch className="cursor-pointer h-6 w-6" />
        <FiUser className="cursor-pointer h-6 w-6" />
        <CartActions />
      </div>

      <div className="block xl:hidden">
        <ShowHamburger />
      </div>
    </nav>
  );
}

export default NavBar;
