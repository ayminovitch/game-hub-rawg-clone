import usePlatforms from "../hooks/usePlatforms.ts";

const usePlatform = (id?: number) => {
    const {data: platforms} = usePlatforms();
    return platforms?.results.find(p => p.id === id);

};

export default usePlatform;