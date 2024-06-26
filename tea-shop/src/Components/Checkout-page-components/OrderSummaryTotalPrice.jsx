export default function OrderSummaryTotalPrice({ totalPrice }) {
  const deliveryPrice = 3.95;
  return (
    <>
      <span>Total</span>
      <span className="text-lg">
        <strong>{(totalPrice + deliveryPrice).toFixed(2)}€</strong>
      </span>
    </>
  );
}
