import ProductFilterName from "./ProductFilterName";
import ProductFilterRow from "./ProductFilterRow";

export default function ProductFilterGroup({
  collection,
  handleFilterToggle,
  openFilters,
  onFilterChange,
  selectedFilters,
  index,
}) {
  return (
    <div key={collection.id} className="mb-4 border-b border-gray-500">
      <div className="flex justify-between">
        <ProductFilterName
          handleFilterToggle={handleFilterToggle}
          collection={collection}
          openFilters={openFilters}
          index={index}
        />
      </div>
      {openFilters[index] && (
        <div className="w-[200px] h-max">
          {collection.filters.map((species, speciesIndex) => (
            <ProductFilterRow
              species={species}
              key={speciesIndex}
              onFilterChange={onFilterChange}
              selectedFilters={selectedFilters}
              collection={collection}
            />
          ))}
        </div>
      )}
    </div>
  );
}
