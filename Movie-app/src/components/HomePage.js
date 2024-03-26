import React from "react";
import Section from "./Section";

const HomePage = ({ movie, search, filteredMovies }) => {
  return (
    <>
      <Section movie={search === movie ? movie : filteredMovies} />
    </>
  );
};

export default HomePage;
