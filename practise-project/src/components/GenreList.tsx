import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import CroppedImage from "../services/image-url";

const GenreList = () => {
  //   const { Genre } = useGenre();
  const { data } = useGenre();
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
            <Text fontSize={"lg"}>{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
