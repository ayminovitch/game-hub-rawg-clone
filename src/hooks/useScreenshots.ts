import ApiClient from "../services/api-client.ts";
import {useQuery} from "@tanstack/react-query";
import {Screenshots} from "../entities/Screenshots.ts";

const useScreenshots = (gameId: number) => {
    const apiClient = new ApiClient<Screenshots>(`/games/${gameId}/screenshots`);

    return useQuery({
        queryKey: ["screenshots", gameId],
        queryFn: () => apiClient.getAll()
    })
}

export default useScreenshots;