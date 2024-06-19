import { useEffect, useState } from "react";
import { fetchSearchMovie } from "../../api";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import SearchMovie from "../../components/SearchMovie/SearchMovie";
import { Toaster } from "react-hot-toast";
import MovieList from "../../components/MovieList/MovieList";
import Load from "../../components/Load/Load";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [params] = useSearchParams();

  const paramQuery = params.get("query") ?? "";
  const searchAMovies = async () => {
    setMovies([]);
    setPage(1);
  };

  useEffect(() => {
    const fetchSearchList = async () => {
      if (paramQuery === "") return;
      try {
        setLoading(true);
        setError(false);
        const data = await fetchSearchMovie(paramQuery, page);
        setMovies((prev) => [...prev, ...data.results]);
        if (page >= data.total_pages) {
          setLoadMore(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchList();
  }, [paramQuery, page]);

  const handleMore = () => {
    setPage(page + 1);
  };
  return (
    <>
      <SearchMovie onSearch={searchAMovies} />
      {movies.length > 0 && <MovieList movies={movies} />}
      {movies.length > 0 && !loading && !loadMore && (
        <LoadMoreBtn onMore={handleMore} />
      )}
      {loading && <Load />}
      {error && <Error />}
      <Toaster position="top-center" />
    </>
  );
};

export default MoviesPage;
