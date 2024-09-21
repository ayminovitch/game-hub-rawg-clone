import {Platform} from "./usePlatforms.ts";
import {GameQuery} from "../App.tsx";
import {useInfiniteQuery} from "@tanstack/react-query";
import {FetchResponse} from "../services/api-client.ts";
import APIClient from "../services/api-client.ts";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam = 1}) => apiClient.getAll({
        params: {
            page: pageParam,
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
        }
    }),
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
    },
    keepPreviousData: true,
    staleTime: 24 * 60 * 60 * 1000, //24h
})

export default useGames;