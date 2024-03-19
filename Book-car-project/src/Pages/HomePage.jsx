import Banner from "./homePage-sections/Banner";
import FindCar from "./homePage-sections/FindCar";
import SatisfiedCustomers from "./homePage-sections/SatisfiedCustomers";

function HomePage({ cars }) {
  return (
    <>
      <Banner />
      <FindCar cars={cars} />
      <SatisfiedCustomers />
    </>
  );
}

export default HomePage;
