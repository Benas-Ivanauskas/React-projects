import OrderSummaryDeliveryPrice from "./OrderSummaryDeliveryPrice";
import OrderSummarySubtotalPrice from "./OrderSummarySubtotalPrice";
import OrderSummaryTotalPrice from "./OrderSummaryTotalPrice";

function OrderSummary({ totalPrice }) {
  return (
    <div className="w-[350px] h-72 sm:w-[500px] bg-orderBackgroundLightGray p-5 mb-4 sm:mb-12">
      <h3 className="text-lg font-normal leading-7 mb-5">Order summary</h3>
      <div className="flex justify-between text-base py-3">
        <OrderSummarySubtotalPrice totalPrice={totalPrice} />
      </div>
      <div className="flex justify-between text-base py-3">
        <OrderSummaryDeliveryPrice />
      </div>
      <div className="flex justify-between text-base py-3 border-t border-orderBorderColor">
        <OrderSummaryTotalPrice totalPrice={totalPrice} />
      </div>
      <p className="text-sm text-gray">Estimated shipping time: 2 days</p>
    </div>
  );
}

export default OrderSummary;
