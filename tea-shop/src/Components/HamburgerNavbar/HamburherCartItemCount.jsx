import { useSelector } from "react-redux";

export default function HamburherCartItemCount() {
  const cartLength = useSelector((state) => state.cart.cart.length);
  return (
    <p className="font-normal  text-orange text-sm">
      ({cartLength}) <span className="text-gray">items have been added</span>
    </p>
  );
}
