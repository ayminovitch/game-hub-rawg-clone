import {useQuery} from "@tanstack/react-query";
import genres from "../data/genres.ts";
import APIClient from "../services/api-client.ts";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

const fetchData = new APIClient<Genre>('/genres')
const useGenre = () => useQuery({
    queryKey: ['genre'],
    queryFn: fetchData.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count: genres.length, results: genres}
})

export default useGenre;