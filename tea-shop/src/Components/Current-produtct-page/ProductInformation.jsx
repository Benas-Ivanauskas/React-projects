import { IoBagHandleSharp } from "react-icons/io5";
import Button from "../Buttons-components/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTeaFlavors } from "../../hooks/useTeaFlavors";
import LoaderSpinner from "../../utils/LoaderSpinner";
import { useState } from "react";
import TeaLoadingError from "../../utils/TeaLoadingError";
import ProductInformationTitle from "./ProductInformationTitle";
import ProductInformationCountry from "./ProductInformationCountry";
import ProductInformationPrice from "./ProductInformationPrice";
import ProductInformationVariants from "./ProductInformationVariants";

function ProductInformation({ id }) {
  const { getFlavorById, isLoading, isError } = useTeaFlavors();

  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const dispatch = useDispatch();

  const currentFlavor = getFlavorById(id);

  const handleAddToCart = () => {
    if (!currentFlavor) return;

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
  if (isLoading) {
    return <LoaderSpinner />;
  }
  if (isError || !currentFlavor) {
    return <TeaLoadingError />;
  }

  return (
    <div className="flex justify-center p-5 flex-wrap">
      <img
        className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-contain sm:object-cover me-0 lg:me-20"
        src={currentFlavor.image}
        alt={currentFlavor.name}
      />
      <div className="flex flex-col justify-between">
        <ProductInformationTitle currentFlavor={currentFlavor} />
        <div className="flex gap-10 items-center justify-between lg:justify-start">
          <ProductInformationCountry currentFlavor={currentFlavor} />
          <ProductInformationPrice currentFlavor={currentFlavor} />
        </div>
        <ProductInformationVariants />
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
