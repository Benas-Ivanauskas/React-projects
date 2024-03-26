import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SelectedMovie.css";
import { CiBookmark } from "react-icons/ci";

const SelectedMoviePage = ({ movie, watchList, setWatchList }) => {
  const { id } = useParams();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isAddedToList, setIsAddedToList] = useState(false);

  useEffect(() => {
    const currentMovie = movie.find((movie) => movie.id.toString() === id);
    setSelectedMovie(currentMovie);
  }, [id, movie]);

  useEffect(() => {
    setIsAddedToList(watchList.some((item) => item.id === selectedMovie?.id));
  }, [selectedMovie, watchList]);

  const addToWatchList = () => {
    if (selectedMovie) {
      if (!watchList.find((movie) => movie.id === selectedMovie.id)) {
        setWatchList([...watchList, selectedMovie]);
        setIsAddedToList(true);
      }
    }
  };

  return (
    <div className="current-movie">
      {selectedMovie ? (
        <div className="picked-movie">
          <img
            className="poster-img"
            src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
          />
          <div>
            <h2>{selectedMovie.title}</h2>
            <div className="information-about-movie">
              <img
                className="backdrop-img"
                src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}
                alt={selectedMovie.title}
              />
              <div>
                <p>
                  Movie released date -{" "}
                  <strong>{selectedMovie.release_date}</strong>
                </p>
                <p>
                  Original language -{" "}
                  <strong>{selectedMovie.original_language}</strong>
                </p>
              </div>
            </div>
            <p className="movie-description">{selectedMovie.overview}</p>
            {isAddedToList ? (
              <button className="watch-list-btn" disabled>
                <CiBookmark className="book-icon" /> Added
              </button>
            ) : (
              <button className="watch-list-btn" onClick={addToWatchList}>
                <CiBookmark className="book-icon" /> Add to watch list
              </button>
            )}
          </div>
        </div>
      ) : (
        <p className="Loading">Loading...</p>
      )}
    </div>
  );
};

export default SelectedMoviePage;
