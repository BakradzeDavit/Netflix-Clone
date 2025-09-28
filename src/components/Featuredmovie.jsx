import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Featuredmovie({ movies }) {
  const [movie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    if (movies.length > 0) {
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setFeaturedMovie(randomMovie);
    }
  }, []);

  if (!movie) return null;

  return (
    <div className="featured-movie">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.original_title}
      />
      <div className="description">
        <h2 className="ftitle">{movie?.title}</h2>
        <p className="fdescription">{movie?.overview}</p>
        <Link to={`/movie/${movie.id}`} state={{ movie }}>
          <button className="fbutton">
            <i className="bi bi-play-fill"></i>Play
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Featuredmovie;
