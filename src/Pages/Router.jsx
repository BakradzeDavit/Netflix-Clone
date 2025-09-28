import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App.jsx";
import MoviePage from "./MoviePage";
import Header from "../components/Header";
import SearchMovie from "../components/SearchMovie.jsx";
import FavoritesPage from "./FavoritesPage.jsx";
import { fetchMovies } from "../API";
import { useEffect, useState } from "react";

export default function AppRouter() {
  const [favorite, setFavorite] = useState(false);
  const [language, setLanguage] = useState("en-US");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies(256, language);
      console.log("Fetched movies:", data.length);
      setMovies(data);
    };
    loadMovies();
  }, [language]);
  return (
    <Router>
      <Header language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<App movies={movies} favoriteMovies= {favoriteMovies} />} />
        <Route path="/movie/:id" element={<MoviePage movies={movies} setFavorites={setFavorites} favorite={favorite} setFavorite={setFavorite} />} />
        <Route
          path="/favorites"
          element={<FavoritesPage favoriteMovies={favoriteMovies}  />}
        />
        <Route
          path="/search/:searchTerm"
          element={<SearchMovie movies={movies} />}
        />
      </Routes>
    </Router>
  );
}
