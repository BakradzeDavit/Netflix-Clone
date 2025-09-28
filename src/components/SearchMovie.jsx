import { useParams } from "react-router-dom";
import Movie from "./Movie";

function SearchMovie({ movies }) {
  const { searchTerm } = useParams();
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="movie-section">
      <h2>Search Results for "{searchTerm}"</h2>
      <div className="movie-list">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchMovie;
