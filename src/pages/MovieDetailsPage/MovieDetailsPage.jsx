import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../api";
import MovieDetailsCard from "../../components/MovieDetailsCard/MovieDetailsCard";
import Load from "../../components/Load/Load";
import MovieReview from "../../components/MovieReview/MovieReview";

const MovieDetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkRef.current}>Go back</Link>
      {loading && <Load />}
      {error && <Error />}
      {movie && <MovieDetailsCard movie={movie} />}
      {movie && <MovieReview />}
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
