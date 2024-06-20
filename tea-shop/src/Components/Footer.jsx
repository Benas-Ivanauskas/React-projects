import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-lightGray w-full flex justify-between  lg:justify-around flex-wrap p-10">
      <div className="p-3 flex">
        <ul>
          <h4 className="text-xl font-bold mb-3 uppercase">Collections</h4>
          <li>Black teas</li>
          <li>Green teas</li>
          <li>White teas</li>
          <li>Matcha</li>
          <li>Chai</li>
        </ul>
      </div>
      <div className="p-3">
        <ul>
          <h4 className="text-xl font-bold mb-3 uppercase">Learn</h4>
          <li>About us</li>
          <li>About our teas</li>
          <li>Tea academy</li>
        </ul>
      </div>
      <div className="p-3">
        <ul>
          <h4 className="text-xl font-bold mb-3 uppercase">Customer serivce</h4>
          <li>Ordering and payment</li>
          <li>Delivery</li>
          <li>Privacy and policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="p-3">
        <ul className="w-[350px]">
          <h4 className="text-xl font-bold mb-3 uppercase">Contact us</h4>
          <li className="flex items-start">
            <IoLocationOutline className="w-7 h-7" />{" "}
            <span className="w-[270px] sm:w-full">
              3 Falahi, Falahi St, Pasdaran Ave, Shiraz, Fars Provieence Iran
            </span>
          </li>
          <li className="flex items-center gap-3">
            <MdOutlineMailOutline className="w-5 h-5" />
            <span>Email: amoopur@gmail.com</span>
          </li>
          <li className="flex items-center gap-3">
            <MdOutlineLocalPhone />
            <span>Tel: +98 9173038406 </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
