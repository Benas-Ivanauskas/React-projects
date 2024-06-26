import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../features/cart/cartSlice";

function CheckoutProductDetails({ item }) {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <p className="text-sm text-gray">{item.name}</p>
        <p className="text-sm">{item.grams}g</p>
      </div>
      <button
        onClick={() => dispatch(deleteItem(item.id))}
        className="text-base flex items-center gap-2"
      >
        <FaRegTrashAlt />
        REMOVE
      </button>
    </>
  );
}

export default CheckoutProductDetails;
