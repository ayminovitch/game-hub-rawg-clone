import APIClient from "../services/api-client.ts";
import {Trailer} from "../entities/Trailer.ts";
import {useQuery} from "@tanstack/react-query";

const useTrailers = (gameId: number) => {
    const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`)
    return useQuery({
        queryKey: ['trailers', gameId],
        queryFn: () => apiClient.getAll()
    })
};

export default useTrailers;