export default function ProductFilterRow({
  onFilterChange,
  selectedFilters,
  collection,
  species,
}) {
  const isSelected = (category, filter) => {
    return selectedFilters[category]?.includes(filter);
  };

  return (
    <label className="flex gap-3 items-center mb-1 text-lg">
      <input
        type="checkbox"
        checked={isSelected(collection.filterCategory, species)}
        onChange={() => onFilterChange(collection.filterCategory, species)}
      />
      {species}
    </label>
  );
}
