import { IoIosArrowForward } from "react-icons/io";

function DeliveryAndRetour() {
  return (
    <div className="w-[350px] sm:w-[500px] mt-8 bg-orderBackgroundLightGray p-5">
      <h3 className="text-lg font-normal leading-7 mb-5 ps-4 ">
        Delivery and retour
      </h3>
      <div className="flex flex-col gap-3">
        <p className="flex items-center gap-2 text-base">
          <span>
            <IoIosArrowForward />
          </span>
          Order before 12:00 and we will ship the same day.
        </p>
        <p className="flex items-center gap-2 text-base">
          <span>
            <IoIosArrowForward />
          </span>
          Orders made after Friday 12:00 are processed on Monday.
        </p>
        <p className="flex items-center gap-2 text-base">
          <span>
            <IoIosArrowForward />
          </span>
          To return your articles, please contact us first.
        </p>
        <p className="flex items-center gap-2 text-base">
          <span>
            <IoIosArrowForward />
          </span>
          Postal charges for retour are not reimbursed.
        </p>
      </div>
    </div>
  );
}

export default DeliveryAndRetour;
