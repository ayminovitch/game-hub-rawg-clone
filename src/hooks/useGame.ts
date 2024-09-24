import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client.ts";
import {Game} from "../entities/Game.ts";

const apiClient = new APIClient<Game>('/games')
const useGame = (slug: string) => useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug),
})

export default useGame;