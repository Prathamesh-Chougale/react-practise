import React, { useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    //array of objects with platform property#lecture 12 for showing icons
    metacritic: number;
}

export interface fetchGames {
    count: number;
    results: Game[];
}
const useGames = () => {
    const [game, setGame] = React.useState<Game[]>([]);
    const [err, setErr] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        apiClient
            .get<fetchGames>("/games", { signal: controller.signal })
            .then((res) => {
                {
                    setGame(res.data.results);
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setErr(err.message);
                setIsLoading(false);
            });
        return () => controller.abort();
    }, []);
    return { game, err, isLoading };
}

export default useGames;
