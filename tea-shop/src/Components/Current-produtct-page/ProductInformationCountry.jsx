import { AiOutlineGlobal } from "react-icons/ai";

export default function ProductInformationCountry({ currentFlavor }) {
  return (
    <span className="flex items-center text-lg sm:text-xl gap-2">
      <AiOutlineGlobal className="w-8 h-8" /> Origin: {currentFlavor.country}
    </span>
  );
}
