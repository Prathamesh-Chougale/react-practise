import React, { useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string;
}

interface fetchGames {
    count: number;
    results: Game[];
}
const useGames = () => {
    const [game, setGame] = React.useState<Game[]>([]);
    const [err, setErr] = React.useState("");

    useEffect(() => {
        const controller = new AbortController();

        apiClient
            .get<fetchGames>("/games", { signal: controller.signal })
            .then((res) => {
                setGame(res.data.results);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setErr(err.message);
            });
        return () => controller.abort();
    }, []);
    return { game, err };
}

export default useGames;
