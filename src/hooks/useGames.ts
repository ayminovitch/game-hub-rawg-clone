import ms from 'ms';
import {useInfiniteQuery} from "@tanstack/react-query";
import {FetchResponse} from "../services/api-client.ts";
import APIClient from "../services/api-client.ts";
import useGameQueryStore from "../store.ts";
import {Game} from "../entities/Game.ts";

const apiClient = new APIClient<Game>('/games');
const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery)
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam = 1}) => apiClient.getAll({
            params: {
                page: pageParam,
                genres: gameQuery.genreId,
                parent_platforms: gameQuery.platformId,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            }
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        keepPreviousData: true,
        staleTime: ms('24h'), //24h
    })
}

export default useGames;