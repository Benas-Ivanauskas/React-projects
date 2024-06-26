import LinkButton from "../Buttons-components/LinkButton";

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
              Experience the richness of flavors and the warmth of tradition
              with each sip. Our teas are crafted to provide a unique journey,
              inviting you to explore and savor the moment.
            </p>
            <p className="text-base w-5/6 mb-4">
              Whether you seek the serenity of a quiet afternoon or the
              invigorating start to your day, our collection has something
              special to offer. Join us in celebrating the art of tea, where
              every cup tells a story.
            </p>
            <LinkButton to="/products" text="Browse teas" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeLandingSection;
