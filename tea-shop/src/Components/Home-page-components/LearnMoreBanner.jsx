import "./LearnMoreBanner.css";

import { BsCupHot } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoPricetagOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import CustomButton from "../Buttons-components/CustomButton";

function LearnMoreBanner() {
  return (
    <div className="max-w-full mt-20 h-[181px] bg-lightGray flex flex-col justify-around">
      <div className="grid grid-rows-2 lg:grid-rows-1 grid-flow-col text-center">
        <div className="banner-text">
          <BsCupHot />
          <p>
            <span>450+</span> Kind of loosef TEA
          </p>
        </div>
        <div className="banner-text">
          <IoBagHandleOutline />
          <p>Certificated organic teas</p>
        </div>
        <div className="banner-text">
          <CiDeliveryTruck />
          <p>Free delivery</p>
        </div>
        <div className="banner-text">
          <IoPricetagOutline />
          <p>Sample for all teas</p>
        </div>
      </div>
      <CustomButton className="w-52 h-10 -1 mx-auto flex items-center justify-center">
        LEARN MORE
      </CustomButton>
    </div>
  );
}

export default LearnMoreBanner;
