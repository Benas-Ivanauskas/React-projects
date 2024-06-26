import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import HamburgerNavBar from "../HamburgerNavbar/HamburgerNavBar";

export default function ShowHamburger() {
  const [toggleHamburger, setToggleHamburger] = useState(true);

  const showHamburger = () => {
    setToggleHamburger(!toggleHamburger);
  };
  return (
    <>
      {toggleHamburger ? (
        <GiHamburgerMenu
          className="h-10 w-8 mx-6 md:mx-0 cursor-pointer"
          onClick={showHamburger}
        />
      ) : (
        <>
          <button onClick={showHamburger}>
            <IoClose className="h-10 w-8 mx-6 md:mx-0 cursor-pointer" />
          </button>
          <HamburgerNavBar />
        </>
      )}
    </>
  );
}
