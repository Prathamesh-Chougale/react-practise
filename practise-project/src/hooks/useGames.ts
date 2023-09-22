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
    parent_platforms: { platform: Platform }[];//array of objects with platform property#lecture 12 for showing icons
}

export interface fetchGames {
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
