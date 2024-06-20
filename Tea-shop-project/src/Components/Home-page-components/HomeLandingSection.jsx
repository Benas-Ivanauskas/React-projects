import { Link } from "react-router-dom";
import Button from "../Buttons-components/Button";

function HomeLandingSection() {
  return (
    <section className="flex justify-center mt-3">
      <div className="container  lg:container lg:mx-auto flex justify-around flex-wrap lg:flex-nowrap">
        <img
          className="max-w-full h-[380px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
          src="images/home-landing-image.png"
          alt="home landing image"
        />
        <div className="w-full sm:max-w-full flex flex-col items-start lg:items-center justify-start md:justify-start lg:justify-center">
          <div className="flex flex-col ms-10 mt-5 sm:mt-0 sm:ms-20">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold max-w-[500px] mb-3 sm:mb-5 mt-3 sm:mt-3 ">
              Every day is unique, just like our tea
            </h1>
            <p className="text-sm lg:text-base w-5/6 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              maiores excepturi provident, odio ex atque id cumque autem beatae
              sint.
            </p>
            <p className="text-base w-5/6 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ut
              quibusdam quia repellat unde suscipit id nulla facere veniam
              obcaecati.
            </p>
            <Link to="/products">
              <Button className="mb-5">Browse teas</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeLandingSection;
