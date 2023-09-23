import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
}


const useGenre = () => useData<Genre>('/genres');//using useGenre to hide data

export default useGenre