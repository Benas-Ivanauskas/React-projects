import { IoIosSearch } from "react-icons/io";

export default function SearchFilter() {
  return (
    <>
      <input
        type="text"
        className="mt-5 w-[250px] h-[42px] ps-10 border border-black text-base"
        placeholder="SEARCH PRODUCTS"
      />
      <IoIosSearch className="ps-2 h-8 w-8 absolute top-6" />
    </>
  );
}
