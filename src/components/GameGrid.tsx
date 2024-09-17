import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {GameQuery} from "../App.tsx";

interface GameGridProps {
    gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: GameGridProps) => {
    const {data, error, isLoading} = useGames(gameQuery);
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