import CarListingSection from "./CarListingPage-sections/CarListingSection";

function CarListing({ cars }) {
  return (
    <div>
      <CarListingSection cars={cars} />
    </div>
  );
}

export default CarListing;
