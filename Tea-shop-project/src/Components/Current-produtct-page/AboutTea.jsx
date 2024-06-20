function AboutTea() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h3 className="mb-5 text-xl sm:text-2xl">About this tea</h3>
      <div className="flex gap-4 sm:gap-10 justify-center w-max sm:w-max">
        <p className="text-sm sm:text-base flex flex-col items-center justify-center border-r pe-2 sm:pe-10 border-lightGray">
          <strong>FLAVOR</strong>
          <span>Spicy</span>
        </p>
        <p className="text-sm sm:text-base flex flex-col items-center justify-start border-r pe-2 sm:pe-10 border-lightGray">
          <strong>QUALITIES</strong>
          <span>Smoothing</span>
        </p>
        <p className="text-sm sm:text-base flex flex-col items-center justify-center border-r pe-2 sm:pe-10 border-lightGray">
          <strong>CAFFEINE</strong>
          <span>Medium</span>
        </p>
        <p className="text-sm sm:text-base flex flex-col items-center justify-center border-lightGray">
          <strong>Allergens</strong>
          <span>Nuts-free</span>
        </p>
      </div>
      <div className="flex justify-center flex-col">
        <h3 className="mb-5 text-xl sm:text-2xl mt-4">Ingredient</h3>
        <p className="w-[300px] sm:w-[500px] text-sm sm:text-base">
          Black Ceylon tea, Green tea, Ginger root, Cloves, Black pepper,
          Cinnamon sticks, Cardamom, Cinnamon pieces.
        </p>
      </div>
    </div>
  );
}

export default AboutTea;
