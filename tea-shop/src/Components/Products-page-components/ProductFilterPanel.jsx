import { useState } from "react";
import ProductFilterGroup from "./ProductFilterGroup";

const filterGroups = [
  {
    filterName: "Collection",
    filterCategory: "collectionType",
    filters: ["chai", "black", "green", "white", "matcha"],
    id: 1,
  },
  {
    filterName: "Country",
    filterCategory: "country",
    filters: ["India", "Japan", "China"],
    id: 2,
  },
];

export default function ProductFilterPanel({
  onFilterChange,
  selectedFilters,
}) {
  const [openFilters, setOpenFilters] = useState(filterGroups.map(() => false));

  const handleFilterToggle = (category) => {
    setOpenFilters((prevOpenFilters) => ({
      ...prevOpenFilters,
      [category]: !prevOpenFilters[category],
    }));
  };

  return (
    <div className="w-[200px] h-max flex flex-col justify-between">
      {filterGroups.map((collection, index) => (
        <ProductFilterGroup
          key={index}
          index={index}
          collection={collection}
          handleFilterToggle={handleFilterToggle}
          openFilters={openFilters}
          onFilterChange={onFilterChange}
          selectedFilters={selectedFilters}
        />
      ))}
    </div>
  );
}
