import { Link, useLocation } from "react-router-dom";

const MovieCard = ({ moviesId }) => {
  const location = useLocation();
  return (
    <Link to={`/movies/${moviesId.id}`} state={location}>
      <div>
        <p>{moviesId.title}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
