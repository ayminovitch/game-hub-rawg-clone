import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {Genre} from "../hooks/useGenre.ts";
import {Platform} from "../hooks/usePlatforms.ts";

interface GameGridProps {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

const GameGrid = ({selectedGenre, selectedPlatform}: GameGridProps) => {
    const {data, error, isLoading} = useGames(selectedGenre, selectedPlatform);
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text color="red">{error}</Text>}
            <SimpleGrid columns={{
                sm: 1, md: 2, lg: 3, xl: 5,
            }} spacing={3} padding='10px'>
                {isLoading && skeletons.map(skeleton => (
                    <GameCardContainer key={skeleton}><GameCardSkeleton/></GameCardContainer>))}
                {data.map((game) => (<GameCardContainer key={game.id}><GameCard game={game}/></GameCardContainer>))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;