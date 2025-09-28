import Movie from "./Movie";
import { Link } from "react-router-dom";
function FavoriteMovies({ favoriteMovies }) {
  if (!favoriteMovies.length) return null;

  return (
    <div className="favorite-movies-section">
     
      <div className="favorite-movies-header">
        <h2>My List</h2>
        <Link to="/favorites">
          <button className="see-more-button">
            See More <i className="bi bi-chevron-compact-right"></i>
          </button>
        </Link>
      </div>

  
      <div className="favorite-movies">
        {favoriteMovies.map((movie) => (
          <Movie key={movie.id} movie={movie} imgtype="wide" />
        ))}
      </div>
    </div>
  );
}

export default FavoriteMovies;
