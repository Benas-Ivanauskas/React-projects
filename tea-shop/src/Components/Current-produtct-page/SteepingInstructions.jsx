import { SlCup } from "react-icons/sl";
import { IoWaterOutline } from "react-icons/io5";
import { IoMdTimer } from "react-icons/io";

function SteepingInstructions() {
  return (
    <div className="w-max mb-4 sm:mb-0">
      <h3 className="mb-5 text-xl sm:text-2xl">Steeping instructions</h3>
      <ul>
        <li className="mb-2 pb-2 flex gap-2 items-center border-b border-lightGray">
          <SlCup className="w-5 h-5" /> <strong>SERVING SIZE:</strong>2 tsp per
          cup, 6tsp per pot
        </li>
        <li className="mb-2 pb-2 flex gap-2 items-center border-b border-lightGray">
          <IoWaterOutline className="w-5 h-5" />{" "}
          <strong>WATER TEMPERATURE:</strong> 100°C
        </li>
        <li className="mb-2 pb-2 flex gap-2 items-center border-b border-lightGray">
          <IoMdTimer className="w-5 h-5" />
          <strong>STEEPING TIME:</strong> 3-5 minutes
        </li>
      </ul>
    </div>
  );
}

export default SteepingInstructions;
