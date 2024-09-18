import platforms from "../data/platforms.ts";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const UsePlatforms = () => ({data: platforms, isLoading: false, error: null});

export default UsePlatforms;