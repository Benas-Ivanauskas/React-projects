import { useState } from "react";
import FilterProduct from "./ProductFilter";
import { MdArrowRightAlt } from "react-icons/md";
import TeaAllProductsCard from "./TeaAllProductsCard";
import { useTeaFlavors } from "../../hooks/useTeaFlavors";
import TeaLoadingError from "../../utils/TeaLoadingError";
import LoaderSpinner from "../../utils/LoaderSpinner";

function TeaProducts() {
  const { isError, isLoading, teaFlavors } = useTeaFlavors();

  const [selectedFilters, setSelectedFilters] = useState({
    collectionType: [],
    country: [],
    // Man rodos šitie du filtrai neužpildomi :D
  });
  const [toggleFilter, setToggleFilter] = useState(true);

  const onFilterChange = () => {
    setToggleFilter((prevFilter) => !prevFilter);
  };

  // TODO: galima supaprastinti, labai dažnai naudoti "toggle" funkcijas, bet del ju sudetinga suprasti ir visur reikia custom kodo rašyti, siūlyčiau "onFilterChange kad gražintų ne categoriją ir filter :) o visą filtro state", tada tą state išsisaugosi ir tiek".
  // Jeigu atvirai turėjau perskaityti filtro komponentą kad suprasčiau ką šitas daro :D
  // Čia jau lendam į ateities dalykus bet vadinasi "Separation of Cocerns" apie filtro vidinę struktūrą kitiems komponentams reiktų žinoti kuo mažiau nes sunku pakeisti.
  const handleFilterChange = (category, filter) => {
    setSelectedFilters((prev) => {
      const updatedCategory = prev[category].includes(filter)
        ? prev[category].filter((item) => item !== filter)
        : [...prev[category], filter];

      return { ...prev, [category]: updatedCategory };
    });
  };

  // TODO gan sudėtingas filter vidus :) jeigu parašytum funkcija applyUserFilter ar pan butu aiškiau.
  const applyUserFilter = teaFlavors?.filter((tea) => {
    // TODO: dėl dviejų dar nebūtina :) bet teoriškai pas tave visur padaryti masyvai :D tai jeigu pridėtum į masyvą dar vieną filtrą, tai neveiktų filtramas :D
    // tai reiktų ir čia dinamiškai padaryti :D
    const matchesCollectionType =
      !selectedFilters.collectionType.length ||
      selectedFilters.collectionType.includes(tea.collectionType);
    const matchesCountry =
      !selectedFilters.country.length ||
      selectedFilters.country.includes(tea.country);

    return matchesCollectionType && matchesCountry;
  });

  if (isLoading) {
    return <LoaderSpinner />;
  }

  if (isError) {
    return <TeaLoadingError />;
  }

  return (
    <>
      <div className="flex items-center justify-start ms-8 mt-5 lg:ps-10">
        <button
          onClick={onFilterChange}
          className="items-center text-xl gap-2 cursor-pointer flex ms-0 sm:ms-7 lg:hidden"
        >
          Filter <MdArrowRightAlt />
        </button>
      </div>
      <div className="w-full h-max flex p-3 sm:p-10 flex-col lg:flex-row">
        <div className={`filter ${toggleFilter ? "show" : ""}`}>
          <FilterProduct
            onFilterChange={handleFilterChange}
            selectedFilters={selectedFilters}
          />
        </div>
        <div className="w-full">
          <TeaAllProductsCard teaFlavors={applyUserFilter} />
        </div>
      </div>
    </>
  );
}

export default TeaProducts;
