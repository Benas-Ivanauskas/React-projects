import React from "react";
import "./Section.css";
import { Link } from "react-router-dom";

const Section = ({ movie }) => {
  return (
    <section>
      <div className="movie-container">
        {movie.map((film) => (
          <Link to={`/selected-movie/movie/${film.id}`} key={film.id}>
            <div className="movie">
              <img
                src={`https://image.tmdb.org/t/p/w500` + film.poster_path}
                alt={film.title}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Section;
