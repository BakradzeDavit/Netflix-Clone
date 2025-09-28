import React from 'react'

function Heart({ movieid, favorite, setFavorite, setFavorites }) {
  const changeFavorite = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavs;

    if (favorite) {
      updatedFavs = favs.filter((id) => id !== movieid);
      setFavorite(false);
    } else {
      updatedFavs = [...favs, movieid];
      setFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
    setFavorites(updatedFavs);
  };
  return (
    <div>
       <button className="heart-button" onClick={changeFavorite}>
        <i className="bi bi-heart heart-outline"></i>
        <i
          className={`bi bi-heart-fill heart-fill ${
            favorite ? "favorite" : ""
          }`}
        ></i>
      </button>
    </div>
  )
}

export default Heart
