import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../api";
import ReviewList from "../ReviewList/ReviewList";
import Load from "../Load/Load";

const MovieReviews = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Load />}
      {error && <Error />}
      <h3>Movie reviews</h3>
      {reviews && reviews.length > 0 ? (
        <ReviewList reviews={reviews} />
      ) : (
        <p>We dont have any reviews</p>
      )}
    </>
  );
};

export default MovieReviews;
