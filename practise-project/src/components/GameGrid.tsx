import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelition from "./GameCardSkelition";

const GameGrid = () => {
  const { game, err, isLoading } = useGame();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {err && <Text>{err}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        borderRadius={10}
        padding={5}
        overflow="hidden"
      >
        {isLoading && skeleton.map((s) => <GameCardSkelition key={s} />)}
        {game.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
