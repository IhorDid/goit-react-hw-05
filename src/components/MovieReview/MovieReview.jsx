import { NavLink } from "react-router-dom";

const MovieReview = () => {
  return (
    <div>
      <h4>Additional information</h4>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MovieReview;
