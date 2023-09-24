import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import CroppedImage from "../services/image-url";

interface Props {
  onSelectGenre: (g: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  //   const { Genre } = useGenre();
  const { data, isLoading, err } = useGenre();

  if (isLoading) return <Spinner />;
  if (err) return null;
  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={CroppedImage(g.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(g)}
              fontSize={"lg"}
              variant="link"
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
