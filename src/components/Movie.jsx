import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  return (

      <Link to={`/movie/${movie.id}`} state={{ movie }}>
        <div className="movie">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>
      </Link>
   
  );
}
