import { useEffect } from "react";
import apiClient from "../services/api-client";
import React from "react";
import { CanceledError } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = React.useState<T[]>([]);
    const [err, setErr] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
            .then((res) => {
                {
                    setData(res.data.results);
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setErr(err.message);
                setIsLoading(false);
            });
        return () => controller.abort();
    }, [endpoint]);
    return { data, err, isLoading };
};

export default useData;