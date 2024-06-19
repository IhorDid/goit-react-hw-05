import { Link } from "react-router-dom";

const MovieCard = ({ moviesId }) => {
  return (
    <Link>
      <div>
        <p>{moviesId.title}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
