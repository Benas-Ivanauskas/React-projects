export default function ProductInformationPrice({ currentFlavor }) {
  return (
    <span className="text-2xl sm:text-4xl font-bold me-4 sm:me-0">
      {currentFlavor.price}€
    </span>
  );
}
