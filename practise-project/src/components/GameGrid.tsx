import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelition from "./GameCardSkelition";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, err, isLoading } = useGame(selectedGenre, selectedPlatform);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {err && <Text>{err}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        borderRadius={10}
        padding={5}
        overflow="hidden"
      >
        {isLoading &&
          skeleton.map((s) => (
            <GameCardContainer key={s}>
              <GameCardSkelition key={s} />
            </GameCardContainer>
          ))}
        {data.map((g) => (
          <GameCardContainer key={g.id}>
            <GameCard key={g.id} game={g} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
