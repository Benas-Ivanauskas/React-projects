import "./App.css";
import React, { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectedMoviePage from "./components/SelectedMoviePage";
import WatchListPage from "./components/WatchListPage";
import NotFound from "./components/NotFound";

function App() {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const storedItems = JSON.parse(localStorage.getItem("watchList"));
  const [watchList, setWatchList] = useState(storedItems || []);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_API_KEY,
    },
  };

  const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        options
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      setMovie(data.results);
      setFilteredMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

  const handleFilterButtonClick = (filterType) => {
    let filteredMoviesBtn = [];

    switch (filterType) {
      case "Top 5":
        filteredMoviesBtn = movie.slice(0, 5);
        break;
      case "Top 10":
        filteredMoviesBtn = movie.slice(0, 10);
        break;
      case "All":
        filteredMoviesBtn = movie;
        break;
      default:
        filteredMoviesBtn = movie;
    }

    setFilteredMovies(filteredMoviesBtn);
  };

  const handleSearchChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    if (inputValue.length >= 2) {
      setSearch(inputValue);
      const filteredMoviesFromSearch = movie.filter((film) =>
        film.title.toLowerCase().includes(inputValue)
      );
      setFilteredMovies(filteredMoviesFromSearch);
    } else {
      setSearch("");
      setFilteredMovies(movie);
    }
  };

  return (
    <div>
      <Router>
        <Header
          filter={handleSearchChange}
          handleFilterButtonClick={handleFilterButtonClick}
        />
        <Routes>
          <Route
            path="/"
            element={<HomePage movie={movie} filteredMovies={filteredMovies} />}
          />
          <Route
            path="/home-page"
            element={<HomePage movie={movie} filteredMovies={filteredMovies} />}
          />
          <Route
            path="/selected-movie/movie/:id"
            element={
              <SelectedMoviePage
                movie={movie}
                watchList={watchList}
                setWatchList={setWatchList}
              />
            }
          />
          <Route
            path="/watch-list"
            element={
              <WatchListPage
                watchList={watchList}
                setWatchList={setWatchList}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
