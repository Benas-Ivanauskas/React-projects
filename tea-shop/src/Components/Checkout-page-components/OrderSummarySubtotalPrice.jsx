export default function OrderSummarySubtotalPrice({ totalPrice }) {
  return (
    <>
      <span>Subtotal</span>
      <span>
        <strong>{totalPrice}€</strong>
      </span>
    </>
  );
}
