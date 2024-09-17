import useData from "./useData.ts";
import {Genre} from "./useGenre.ts";
import {Platform} from "./usePlatforms.ts";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => {
    return useData<Game>('/games', {
        params: {
            genres: selectedGenre?.id,
            platforms: selectedPlatform?.id
        }
    }, [selectedGenre?.id, selectedPlatform?.id]);
}

export default useGames;