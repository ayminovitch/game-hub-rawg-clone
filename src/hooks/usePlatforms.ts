import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client.ts";
import ms from "ms";
import platforms from "../data/platforms.ts";
import {Platform} from "../entities/Platform.ts";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const UsePlatforms = () => useQuery({
    queryKey: ['platform'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), //24h
    initialData: platforms
})

export default UsePlatforms;