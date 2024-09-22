import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client.ts";
import platforms from "../data/platforms.ts";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const UsePlatforms = () => useQuery({
    queryKey: ['platform'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: platforms
})

export default UsePlatforms;