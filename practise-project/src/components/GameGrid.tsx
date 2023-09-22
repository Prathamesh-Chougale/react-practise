import { Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";

const GameGrid = () => {
  const { game, err } = useGame();

  return (
    <>
      {err && <Text>{err}</Text>}
      <ul>
        {game.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
