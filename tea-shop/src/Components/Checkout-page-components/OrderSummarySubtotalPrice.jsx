export default function OrderSummarySubtotalPrice({ totalPrice }) {
  return (
    <>
      <span>Subtotal</span>
      <span>
        <strong>{totalPrice.toFixed(2)}€</strong>
      </span>
    </>
  );
}
