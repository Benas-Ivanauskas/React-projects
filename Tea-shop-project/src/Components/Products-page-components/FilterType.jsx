import { useState } from "react";

const collections = [
  {
    filterName: "Collection",
    filterCategory: "collectionType",
    filterSpecies: ["chai", "black", "green", "white", "matcha"],
    id: 1,
  },
  {
    filterName: "Country",
    filterCategory: "country",
    filterSpecies: ["India", "Japan", "China"],
    id: 2,
  },
];

function FilterType({ onFilterChange, selectedFilters }) {
  const [openFilters, setOpenFilters] = useState(collections.map(() => false));

  const handleFilterToggle = (index) => {
    setOpenFilters((prevOpenFilters) =>
      prevOpenFilters.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="w-[200px] h-max flex flex-col justify-between">
      {collections.map((collection, index) => (
        <div key={collection.id} className="mb-4 border-b border-gray-500">
          <div className="flex justify-between">
            <p className="text-xl">{collection.filterName}</p>
            <span
              onClick={() => handleFilterToggle(index)}
              className="text-2xl cursor-pointer"
            >
              {openFilters[index] ? "-" : "+"}
            </span>
          </div>
          {openFilters[index] && (
            <div className="w-[200px] h-max">
              {collection.filterSpecies.map((species, speciesIndex) => (
                <label
                  key={speciesIndex}
                  className="flex gap-3 items-center mb-1 text-lg"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters[
                      collection.filterCategory
                    ].includes(species)}
                    onChange={() =>
                      onFilterChange(collection.filterCategory, species)
                    }
                  />
                  {species}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FilterType;
