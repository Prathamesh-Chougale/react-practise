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

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games', { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } }, [selectedGenre?.id, selectedPlatform?.id])

export default useGames;
