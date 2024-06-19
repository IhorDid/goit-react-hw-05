import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWU1NDMwZmU4NTAwZGNhNzE2ODJkMzFkNGMzNWNhZiIsInN1YiI6IjY2NzFkMjFlZGVmZmM2NTBlOTgzZDg1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d4nlDGVYCkZZTuziWHEmHWtwNDHTdo3U-Jg-TFjeY8g";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;

const fetchTrendingMovies = async () => {
  const { data } = await axios.get("/trending/movie/week");
  return data;
};

const fetchMovieDetails = async (id) => {
  const { data } = await axios.get(`/movie/${id}`);
  return data;
};

const fetchSearchMovie = async (query, page) => {
  const { data } = await axios.get(`/search/movie?query=${query}&page=${page}`);
  return data;
};
export { fetchTrendingMovies, fetchMovieDetails, fetchSearchMovie };
