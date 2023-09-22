import React, { useEffect } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface fetchGames {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [game, setGame] = React.useState<Game[]>([]);
  const [err, setErr] = React.useState("");

  useEffect(() => {
    apiClient
      .get<fetchGames>("/games")
      .then((res) => {
        setGame(res.data.results);
      })
      .catch((err) => {
        setErr(err.message);
      });
  }, []);

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
