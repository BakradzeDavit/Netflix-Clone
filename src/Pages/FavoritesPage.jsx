import Movie from "../components/Movie";
function FavoritesPage({ favoriteMovies }) {
 
  return (
    <div>
      <h1 className="text-6xl p-6">My List</h1>
        <ul className="movie-list">
        {favoriteMovies.map((movie) => (
         <Movie key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  )
}

export default FavoritesPage;