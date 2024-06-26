import { IoCartOutline } from "react-icons/io5";
import HamburherCartItemCount from "./HamburherCartItemCount";

export default function HamburgerReviewCart({ handleOpenCart }) {
  return (
    <>
      <IoCartOutline
        className="w-7 h-7 cursor-pointer"
        onClick={handleOpenCart}
      />
      <div className="cursor-pointer" onClick={handleOpenCart}>
        <p className="uppercase text-base">Your cart</p>
        <HamburherCartItemCount />
      </div>
    </>
  );
}
