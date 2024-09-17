import useData from "./useData.ts";
import {Platform} from "./usePlatforms.ts";
import {GameQuery} from "../App.tsx";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
    return useData<Game>('/games', {
        params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id
        }
    }, [gameQuery]);
}

export default useGames;