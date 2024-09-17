import useData from "./useData.ts";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

const useGenre = () => {
    return useData<Genre>('/genres');
}

export default useGenre;