function OrderSummaryDeliveryPrice() {
  const deliveryPrice = 3.95;
  return (
    <>
      <span>Delivery</span>
      <span>
        <strong>{deliveryPrice}€</strong>
      </span>
    </>
  );
}

export default OrderSummaryDeliveryPrice;
