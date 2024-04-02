import React, { useEffect, useState } from "react";
import "./WatchListPage.css";

const WatchListPage = ({ watchList, setWatchList }) => {
  const [showRemoveBtn, setShowRemoveBtn] = useState(-1);
  console.log(watchList);

  const handleMouseEnter = (movieId) => {
    setShowRemoveBtn(movieId);
  };
  const handleMouseLeave = () => {
    setShowRemoveBtn(-1);
  };

  const handleRemoveMovie = (movieId) => {
    const updateWatchlist = watchList.filter((movie) => movie.id !== movieId);
    setWatchList(updateWatchlist);
  };

  return (
    <div className="watchList">
      <div className="watchList-container">
        <h2>My Watch List</h2>
        {watchList.length > 0 && (
          <div className="watchList-movie">
            {watchList.map((movie) => (
              <div
                key={movie.id}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={() => handleMouseEnter(movie.id)}
              >
                <h2>{movie.title}</h2>
                <img
                  src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
                  alt={movie.title}
                />
                {showRemoveBtn === movie.id && (
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveMovie(movie.id)}
                  >
                    ✖ Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
        {watchList.length === 0 && (
          <p className="no-displayed-movies">No movies in your watch list.</p>
        )}
      </div>
    </div>
  );
};

export default WatchListPage;
