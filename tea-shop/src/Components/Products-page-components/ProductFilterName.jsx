export default function ProductFilterName({
  collection,
  openFilters,
  handleFilterToggle,
  index,
}) {
  return (
    <>
      <p className="text-xl">{collection.filterName}</p>
      <span
        onClick={() => handleFilterToggle(index)}
        className="text-2xl cursor-pointer"
      >
        {openFilters[index] ? "-" : "+"}
      </span>
    </>
  );
}
