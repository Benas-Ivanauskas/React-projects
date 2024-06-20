function PaymentType() {
  return (
    <div className="w-[350px] sm:w-[500px] p-4 mt-8 bg-orderBackgroundLightGray h-[120px] flex-col justify-start items-center">
      <h3 className="text-lg font-normal leading-7 mb-5 ps-4">Payment type</h3>

      <div className="flex justify-around">
        <img className="cursor-pointer" src="images/Visa.png" alt="visa card" />
        <img
          className="cursor-pointer"
          src="images/mastercard-dark-large.png"
          alt="mastercard card"
        />
        <img
          className="cursor-pointer"
          src="images/maestro-dark-large.png"
          alt="maestro card"
        />
        <img className="cursor-pointer" src="images/deal.png" alt="deal card" />
        <img
          className="cursor-pointer"
          src="images/advanced-payment.png"
          alt="advanced payment"
        />
      </div>
    </div>
  );
}

export default PaymentType;
