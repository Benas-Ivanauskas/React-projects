import Button from "../Buttons-components/Button";

function OrderSummary({ totalPrice }) {
  const deliveryPrice = 3.95;
  return (
    <div className="w-[350px] sm:w-[500px] bg-orderBackgroundLightGray p-5">
      <h3 className="text-lg font-normal leading-7 mb-5">Order summary</h3>
      <div className="flex justify-between text-base py-3">
        <span>Subtotal</span>
        <span>
          <strong>{totalPrice.toFixed(2)}€</strong>
        </span>
      </div>
      <div className="flex justify-between text-base py-3">
        <span>Delivery</span>
        <span>
          <strong>3.95€</strong>
        </span>
      </div>
      <div className="flex justify-between text-base py-3 border-t border-orderBorderColor">
        <span>Total</span>
        <span className="text-lg">
          <strong>{(totalPrice + deliveryPrice).toFixed(2)}€</strong>
        </span>
      </div>
      <p className="pb-5 text-sm text-gray">Estimated shipping time: 2 days</p>
      <Button className="w-full">CHECK OUT</Button>
    </div>
  );
}

export default OrderSummary;
