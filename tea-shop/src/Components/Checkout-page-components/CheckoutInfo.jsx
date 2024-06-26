import PropTypes from "prop-types";
import CheckoutProductDetails from "./CheckoutProductDetails";
import CheckoutQuantityAdjuster from "./CheckoutQuantityAdjuster";

export default function CheckoutInfo({ item }) {
  return (
    <>
      <div className="flex mb-3 justify-between">
        <div className="flex">
          <img
            className="w-14 h-14 object-contain xl:w-24 xl:h-24 me-5"
            src={item.image}
            alt={item.name}
          />
          <div className="flex flex-col justify-between items-start">
            <CheckoutProductDetails item={item} />
          </div>
        </div>
        <div className="flex flex-col text-end justify-between">
          <CheckoutQuantityAdjuster item={item} />
        </div>
      </div>
    </>
  );
}

CheckoutInfo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    grams: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
