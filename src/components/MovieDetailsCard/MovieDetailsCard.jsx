import styles from "./MovieDetailsCard.module.css";

const MovieDetailsCard = ({ movie }) => {
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.fit}
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <div>
        <h2>{movie.title}</h2>

        <h3>Rating</h3>
        <p>{movie.vote_average}</p>

        <h3>Overview:</h3>
        <p>{movie.overview}</p>

        <h3>Release Date</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
