import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map((movies) => (
          <li key={movies.id}>
            <MovieCard moviesId={movies} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
