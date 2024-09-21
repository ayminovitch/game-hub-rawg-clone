import {useQuery} from "@tanstack/react-query";
import apiClient, {FetchResponse} from "../services/api-client.ts";
import genres from "../data/genres.ts";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

const useGenre = () => useQuery({
    queryKey: ['genre'],
    queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count: genres.length, results: genres}
})

export default useGenre;