import { IoCartOutline } from "react-icons/io5";

export default function CartButton({ openCartToggle }) {
  return (
    <IoCartOutline
      className="cursor-pointer h-6 w-6"
      onClick={openCartToggle}
    />
  );
}
