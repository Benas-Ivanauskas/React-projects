import {
  decreaseQuantity,
  increaseCartQuantity,
} from "../../features/cart/cartSlice";
import BtnIncDec from "../Buttons-components/BtnIncDec";
import { useDispatch } from "react-redux";

export default function CheckoutQuantityAdjuster({ item }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex items-center text-xl gap-4">
        <BtnIncDec onClick={() => dispatch(decreaseQuantity(item.id))}>
          -
        </BtnIncDec>
        <span className="text-lg xl:text-2xl">{item.quantity}</span>
        <BtnIncDec onClick={() => dispatch(increaseCartQuantity(item.id))}>
          +
        </BtnIncDec>
      </div>
      <span className="text-sm xl:text-xl">
        <strong>{item.price}€</strong>
      </span>
    </>
  );
}
