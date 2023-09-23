import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { Genre } = useGenre();
  return (
    <ul>
      {Genre.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
