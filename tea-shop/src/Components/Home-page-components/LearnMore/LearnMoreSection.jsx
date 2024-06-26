import "./LearnMoreSection.css";
import { BsCupHot } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoPricetagOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import CustomButton from "../../Buttons-components/CustomButton";
import LearMoreText from "./LearnMoreText";

export default function LearnMoreSection() {
  return (
    <div className="max-w-full mt-20 h-[181px] bg-lightGray flex flex-col justify-around">
      <div className="grid grid-rows-2 lg:grid-rows-1 grid-flow-col text-center">
        <LearMoreText Icon={BsCupHot} text="450+ Kind of loose TEA" />
        <LearMoreText
          Icon={IoBagHandleOutline}
          text="Certificated organic teas"
        />
        <LearMoreText Icon={CiDeliveryTruck} text="Free delivery" />
        <LearMoreText Icon={IoPricetagOutline} text="Sample for all teas" />
      </div>
      <CustomButton
        className="w-52 h-10 -1 mx-auto flex items-center justify-center"
        text="Learn more"
      />
    </div>
  );
}
