import useScreenshots from "../hooks/useScreenshots.ts";
import {Image, SimpleGrid} from "@chakra-ui/react";

interface Props {
    gameId: number;
}

const GameScreenshots = ({gameId}: Props) => {
    const {data, error, isLoading} = useScreenshots(gameId);

    if (isLoading) return null;
    if (error) throw error;

    return data ? (<SimpleGrid spacing={2} columns={{
        base: 1, md: 2
    }}>
        {data.results.map(({image, id}) => <Image key={id} src={image}/>)}

    </SimpleGrid>) : null
};

export default GameScreenshots;