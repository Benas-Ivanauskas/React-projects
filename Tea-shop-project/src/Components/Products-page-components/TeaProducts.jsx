import { useContext, useState } from "react";
import FilterProduct from "./FilterProduct";
import { MdArrowRightAlt } from "react-icons/md";
import TeaAllProductsCard from "./TeaAllProductsCard";
import { TeaFlavorContext } from "../../context/TeaFlavorsDataContext";

function TeaProducts() {
  const { teaFlavorData } = useContext(TeaFlavorContext);
  const [selectedFilters, setSelectedFilters] = useState({
    collectionType: [],
    country: [],
    flavor: [],
    qualities: [],
  });
  const [toggleFilter, setToggleFilter] = useState(false);

  const handleToggleFilter = () => {
    setToggleFilter((prevFilter) => !prevFilter);
  };

  const handleFilterChange = (category, filter) => {
    setSelectedFilters((prev) => {
      const updatedCategory = prev[category].includes(filter)
        ? prev[category].filter((item) => item !== filter)
        : [...prev[category], filter];
      return { ...prev, [category]: updatedCategory };
    });
  };

  const filteredTeaFlavorData = teaFlavorData?.filter((tea) => {
    const matchesCollectionType =
      !selectedFilters.collectionType.length ||
      selectedFilters.collectionType.includes(tea.collectionType);
    const matchesCountry =
      !selectedFilters.country.length ||
      selectedFilters.country.includes(tea.country);

    return matchesCollectionType && matchesCountry;
  });

  return (
    <>
      <div className="flex items-center justify-start ms-8 mt-5 lg:ps-10">
        <p
          onClick={handleToggleFilter}
          className="items-center text-xl gap-2 cursor-pointer flex ms-0 sm:ms-7 lg:hidden"
        >
          Filter <MdArrowRightAlt />
        </p>
      </div>
      <div className="w-full h-max flex p-3 sm:p-10 flex-col lg:flex-row">
        <div className={`filter ${toggleFilter ? "show" : ""}`}>
          <FilterProduct
            onFilterChange={handleFilterChange}
            selectedFilters={selectedFilters}
          />
        </div>
        <div className="w-full">
          <div className="flex gap-5 flex-wrap justify-center pt-5">
            <TeaAllProductsCard teaFlavorData={filteredTeaFlavorData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TeaProducts;
