import { useDispatch, useSelector } from "react-redux";
import {
  deleteItem,
  increaseCartQuantity,
  decreaseQuantity,
} from "../../features/cart/cartSlice";
import BtnIncDec from "../Buttons-components/BtnIncDec";
import { FaRegTrashAlt } from "react-icons/fa";

function CartAddedProduct() {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between mb-3">
          <div className="flex">
            <img
              className=" w-14 h-14 object-contain xl:w-24 xl:h-24 me-5"
              src={item.image}
              alt={item.name}
            />
            <div className="flex flex-col justify-between items-start">
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
            </div>
          </div>
          <div className="flex flex-col text-end justify-between">
            <div className="flex items-center text-xl gap-4">
              <BtnIncDec onClick={() => dispatch(decreaseQuantity(item.id))}>
                -
              </BtnIncDec>
              <span className="text-lg xl:text-2xl">{item.quantity}</span>
              <BtnIncDec
                onClick={() => dispatch(increaseCartQuantity(item.id))}
              >
                +
              </BtnIncDec>
            </div>
            <span className="text-sm xl:text-xl">
              <strong>{item.totalPrice.toFixed(2)}€</strong>
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartAddedProduct;
