function HomePageCars({ cars }) {
  const displaySixCars = cars.slice(0, 6);
  return (
    <div className="choose-car">
      {displaySixCars.map((car, index) => (
        <div className="car-info" key={index}>
          <div className="img-container">
            <img src={car.image} alt={car.brand} />
          </div>
          <h2>{car.brand}</h2>
          <h4>
            Location: <span>{car.location}</span>
          </h4>
          <h4>
            Daily price <span>{car.cost}&euro;</span>
          </h4>
        </div>
      ))}
    </div>
  );
}

export default HomePageCars;
