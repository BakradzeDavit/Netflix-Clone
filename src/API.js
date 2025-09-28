import axios from "axios";

const API_KEY = "3e43eb4d6c996123f7324e280e5bf482";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (amount, language) => {
  let movies = [];
  let page = 1;

  while (movies.length < amount) {
    const res = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        page: page,
        language: language,
      },
    });

    movies = movies.concat(res.data.results);

   
    if (page >= res.data.total_pages) break;
    page++;
  }

 
  return movies.slice(0, amount);
};
