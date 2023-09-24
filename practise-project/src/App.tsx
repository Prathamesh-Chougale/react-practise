import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import Navbar from "./components/Navbar.tsx";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Genre } from "./hooks/useGenre.ts";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector.tsx";
import { Platform } from "./hooks/useGames.ts";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null); //compilation error due to Genre
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  ); //compilation error due to Genre

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem gridArea="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside" paddingX={5}>
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(g) => setSelectedGenre(g)}
            />
          </GridItem>
        </Show>
        <GridItem gridArea="main">
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(p) => setSelectedPlatform(p)}
          />
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
