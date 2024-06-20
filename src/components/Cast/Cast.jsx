const Cast = ({ cast }) => {
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  return (
    <ul>
      {cast.map((person) => {
        return (
          <li key={person.id}>
            <img
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${person.profile_path}`
                  : defaultImg
              }
              alt="actor"
            />
            <h4>{person.character}</h4>
            <p>Name: {person.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
