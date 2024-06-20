import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import Load from "../../components/Load/Load";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        setLoading(true);
        const data = await fetchTrendingMovies();
        setMovies(data.results);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesList();
  }, []);
  return (
    <>
      <div>
        <h1>Tranding today</h1>
      </div>
      {movies && <MovieList movies={movies} />}
      {loading && <Load />}
      {error && <Error />}
    </>
  );
};

export default HomePage;
