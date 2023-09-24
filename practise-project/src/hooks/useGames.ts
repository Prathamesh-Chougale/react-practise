import useData from "./useData";
import { Genre } from "./useGenre";

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

const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', { params: { genres: selectedGenre?.id } }, [selectedGenre?.id])

export default useGames;
