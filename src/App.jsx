import { Splide, SplideSlide } from "@splidejs/react-splide";
import Featuredmovie from "./components/Featuredmovie";
import Movie from "./components/Movie";
import "./App.css";
import FavoriteMovies from "./components/FavoriteMovies";

function App({ movies, favoriteMovies }) {
  const favoriteMoviesList = favoriteMovies.slice(0, 6);
  
  // Responsive Splide options
  const splideOptions = {
    type: "loop",
    perPage: 8,
    pagination: false,
    autoplay: false,
    perMove: 2,
    gap: '1rem',
    breakpoints: {
      1200: {
        perPage: 5,
        perMove: 2,
      },
      1024: {
        perPage: 4,
        perMove: 2,
      },
      768: {
        perPage: 3.5,
        perMove: 1,
        gap: '0.5rem',
      },
      640: {
        perPage: 3,
        perMove: 1,
        gap: '0.5rem',
      },
      480: {
        perPage: 3,
        perMove: 1,
        gap: '0.3rem',
      },
      320: {
        perPage: 2,
        perMove: 1,
        gap: '0.3rem',
      }
    }
  };

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
          options={splideOptions}
          aria-label="Movie Slider 1"
        >
          {fetchMoviesSlice(0, 16)}
        </Splide>
      </div>

      <div className="movie-section">
        <Splide
          options={splideOptions}
          aria-label="Movie Slider 2"
        >
          {fetchMoviesSlice(16, 32)}
        </Splide>
      </div>
      
      <div className="movie-section">
        <Splide
          options={splideOptions}
          aria-label="Movie Slider 3"
        >
          {fetchMoviesSlice(32, 48)}
        </Splide>
      </div>
    </div>
  );
}

export default App;