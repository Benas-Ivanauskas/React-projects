export default function ProductInformationTitle({ currentFlavor }) {
  return (
    <>
      <h2 className="text-xl sm:text-2xl md:text-3xl text-start font-bold mb-2 sm:mb-4 mt-3">
        {currentFlavor.name}
      </h2>
      <p className="text-sm sm:text-base text-gray">
        A lovely warming Chai tea with ginger cinnamon flavours.
      </p>
    </>
  );
}
