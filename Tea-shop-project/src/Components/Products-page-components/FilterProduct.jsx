import FilterType from "./FilterType";
import "./FilterProduct.css";

function FilterProduct({ onFilterChange, selectedFilters }) {
  return (
    <div className="w-[300px] sm:w-[400px] ps-5 flex justify-start lg:justify-center">
      <FilterType
        onFilterChange={onFilterChange}
        selectedFilters={selectedFilters}
      />
    </div>
  );
}

export default FilterProduct;
