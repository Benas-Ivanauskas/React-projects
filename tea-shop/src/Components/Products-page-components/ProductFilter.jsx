import "./ProductFilter.css";
import ProductFilterPanel from "./ProductFilterPanel";

export default function ProductFilter({ onFilterChange, selectedFilters }) {
  return (
    <div className="w-[300px] sm:w-[400px] ps-5 flex justify-start lg:justify-center">
      <ProductFilterPanel
        onFilterChange={onFilterChange}
        selectedFilters={selectedFilters}
      />
    </div>
  );
}
