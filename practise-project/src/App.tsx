// import React from 'react'
import GameGrid from "./components/GameGrid.tsx";
import Navbar from "./components/Navbar.tsx";
import { Grid, GridItem } from "@chakra-ui/react";

const App = () => {
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
        <GridItem gridArea="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
