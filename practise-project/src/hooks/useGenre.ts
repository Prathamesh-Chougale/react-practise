import { useEffect } from "react";
import apiClient from "../services/api-client";
import React from "react";
import { CanceledError } from "axios";

export interface Genre {
    id: number;
    name: string;
}

export interface FetchGenre {
    count: number;
    results: Genre[];
}

const useGenre = () => {
    const [Genre, setGenre] = React.useState<Genre[]>([]);
    const [err, setErr] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        apiClient
            .get<FetchGenre>("/genres", { signal: controller.signal })
            .then((res) => {
                {
                    setGenre(res.data.results);
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
    return { Genre, err, isLoading };
};

export default useGenre