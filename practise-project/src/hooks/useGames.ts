import useData from "./useData";

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

const useGames = () => useData<Game>('/games')

export default useGames;
