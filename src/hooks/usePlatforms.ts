import useData from "./useData.ts";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const UsePlatforms = () => {
    return useData<Platform>('/platforms/lists/parents');
};

export default UsePlatforms;