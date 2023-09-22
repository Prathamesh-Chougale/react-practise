import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcon from "./PlatformIcon";
interface Prop {
  game: Game;
}

const GameCard = ({ game }: Prop) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIcon platform={game.parent_platforms.map((p) => p.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
