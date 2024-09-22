import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client.ts";
import ms from 'ms';

import genres from "../data/genres.ts";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

const fetchData = new APIClient<Genre>('/genres');
const useGenres = () => useQuery({
    queryKey: ['genre'],
    queryFn: fetchData.getAll,
    staleTime: ms('24h'),
    initialData: genres
})

export default useGenres;