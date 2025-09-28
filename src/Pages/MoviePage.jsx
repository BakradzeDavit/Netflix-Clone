import { useLocation } from "react-router-dom";
import Rating from "../components/Rating";
import { useEffect } from "react";
import Heart from "../components/Heart";
export default function MoviePage({ movies, setFavorites, favorite, setFavorite }) {
  
  const { state } = useLocation();
  const movieid = state?.movie.id;
  const movie = movies.find((m) => m.id === movieid);
  const rating = movie ? (movie.vote_average / 2).toFixed(1) : null;

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favs.includes(movieid)) setFavorite(true);
  }, [movieid]);



  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="movie-page">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="description">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>Rating: {rating ? rating : "N/A"}/10</p>
        <Rating rating={rating} />
      </div>
      <Heart
        movieid={movieid}
        favorite={favorite}
        setFavorite={setFavorite}
        setFavorites={setFavorites}
      />
    </div>
  );
}
