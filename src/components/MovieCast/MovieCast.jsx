import { useEffect, useState } from "react";
import { fetchMovieCredit } from "../../api";
import Cast from "../Cast/Cast";
import Load from "../Load/Load";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchCredit = async () => {
      try {
        const data = await fetchMovieCredit(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchCredit();
  }, [movieId]);

  return (
    <div>
      <h1>Movie Cast</h1>
      {loading && <Load />}
      {error && <Error />}
      {cast && <Cast cast={cast} />}
    </div>
  );
};

export default MovieCast;
