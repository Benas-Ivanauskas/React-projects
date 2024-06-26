import { useSelector } from "react-redux";

export default function CartItemsOut() {
  const cartLength = useSelector((state) => state.cart.cart.length);
  return (
    <span className="absolute text-sm top-[-16px] right-[-10px] text-orange">
      ({cartLength})
    </span>
  );
}
