import CustomButton from "../Buttons-components/CustomButton";

function HomeWholeSalersSection() {
  return (
    <div className="w-full h-max flex mt-10 flex-wrap-reverse justify-center mb-10">
      <div className="w-1/2 flex flex-col justify-center items-center text-center">
        <h2 className="font-bold text-2xl sm:text-3xl text-center mt-10 mb-12 pt-4">
          For WholeSalers
        </h2>
        <p className="w-[350px] sm:w-[400px] lg:w-[550px] text-start ms-3 text-sm sm:text-basefont-light leading-7 mb-5 p-4">
          We offer loose tea leaves of the best quality for your business. With
          a choice of more than 450 different kinds of loose tea, we can make a
          sophisticated selection that fits exactly in your kind of
          establishment.
        </p>

        <CustomButton className="w-80 sm:w-96" text="Get a free consultation" />
      </div>
      <img
        className="mb-5 max-w-[400px]  sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] object-contain"
        src="images/wholesalers-tea-image.png"
        alt="wholesale tea"
      />
    </div>
  );
}

export default HomeWholeSalersSection;
