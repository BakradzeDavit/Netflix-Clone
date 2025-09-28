import { Splide, SplideSlide } from "@splidejs/react-splide";
import Featuredmovie from "./components/Featuredmovie";
import Movie from "./components/Movie";
import "./App.css";
import FavoriteMovies from "./components/FavoriteMovies";

function App({ movies, favoriteMovies }) {
  const favoriteMoviesList = favoriteMovies.slice(0, 6);
  const fetchMoviesSlice = (start, end) => {
    const slice = movies.slice(start, end);
    console.log(`Slice ${start}-${end}:`, slice.length, "movies");
    return (
      <>
        {slice.map((movie, index) => (
          <SplideSlide key={movie.id || `${start}-${index}`}>
            <Movie movie={movie} imgtype="wide" />
          </SplideSlide>
        ))}
      </>
    );
  };

  if (movies.length === 0) {
    return <div>Loading movies...</div>;
  }

  return (
    <div>
      <Featuredmovie movies={movies} />
      <FavoriteMovies favoriteMovies={favoriteMoviesList} />
      <div className="movie-section">
        <Splide
          options={{
            type: "loop",
            perPage: 8,
            pagination: false,
            autoplay: false,
            perMove: 2,
          }}
          aria-label="Movie Slider 1"
        >
          {fetchMoviesSlice(0, 16)}
        </Splide>
      </div>

      <div className="movie-section">
        <Splide
          options={{
            type: "loop",
            perPage: 8,
            pagination: false,
            autoplay: false,
            perMove: 2,
          }}
          aria-label="Movie Slider 2"
        >
          {fetchMoviesSlice(16, 32)}
        </Splide>
      </div>
      <div className="movie-section">
        <Splide
          options={{
            type: "loop",
            perPage: 8,
            pagination: false,
            autoplay: false,
            perMove: 2,
          }}
          aria-label="Movie Slider 2"
        >
          {fetchMoviesSlice(32, 48)}
        </Splide>
      </div>
    </div>
  );
}

export default App;
