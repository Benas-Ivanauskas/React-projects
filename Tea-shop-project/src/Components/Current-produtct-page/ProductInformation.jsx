/* eslint-disable react/prop-types */
import { AiOutlineGlobal } from "react-icons/ai";
import { IoBagHandleSharp } from "react-icons/io5";
import Button from "../Buttons-components/Button";
import { useContext, useEffect, useState } from "react";
import { TeaFlavorContext } from "../../context/TeaFlavorsDataContext";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductInformation({ id }) {
  const { findCurrentFlavor } = useContext(TeaFlavorContext);
  const [currentFlavor, setCurrentFlavor] = useState(null);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const flavor = findCurrentFlavor(id);
    setCurrentFlavor(flavor);
  }, [id, findCurrentFlavor]);

  if (!currentFlavor) return <div>Loading...</div>;

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: currentFlavor.id,
        name: currentFlavor.name,
        price: currentFlavor.price,
        quantity: 1,
        totalPrice: currentFlavor.price,
        image: currentFlavor.image,
        grams: currentFlavor.grams,
      })
    );
    setShowAddedMessage(true);
    toast.success("Successfully added to cart!", {
      position: "top-center",
    });
  };

  return (
    <div className="flex justify-center p-5 flex-wrap">
      <img
        className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-contain sm:object-cover me-0 lg:me-20"
        src={currentFlavor.image}
        alt={currentFlavor.name}
      />
      <div className="flex flex-col justify-between">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-start font-bold mb-2 sm:mb-4 mt-3">
          {currentFlavor.name}
        </h2>
        <p className="text-sm sm:text-base text-gray">
          A lovely warming Chai tea with ginger cinnamon flavours.
        </p>
        <div className="flex gap-10 items-center justify-between lg:justify-start">
          <span className="flex items-center text-lg sm:text-xl gap-2">
            <AiOutlineGlobal className="w-8 h-8" /> Origin:{" "}
            {currentFlavor.country}
          </span>
          <span className="text-2xl sm:text-4xl font-bold me-4 sm:me-0">
            {currentFlavor.price}€
          </span>
        </div>
        <span className="text-lg">Variants:</span>
        <div className="flex gap-3">
          <img
            className="border border-red-100 cursor-pointer"
            src="../images/50gbag.png"
            alt="50g tea bag"
          />
        </div>
        <div className="flex mt-5">
          <Button
            onClick={handleAddToCart}
            className="flex items-center gap-3 justify-center"
          >
            <IoBagHandleSharp className="w-[7] h-[7]" />{" "}
            {showAddedMessage === true ? "Added" : "Add to cart"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductInformation;
