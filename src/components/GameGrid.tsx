import React from "react";
import {SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {GameQuery} from "../App.tsx";
import InfiniteScroll from "react-infinite-scroll-component";

interface GameGridProps {
    gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: GameGridProps) => {
    const {data, error, isLoading, fetchNextPage, hasNextPage} = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error.message}</Text>

    const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
    return (
        <InfiniteScroll
            dataLength={fetchedGamesCount}
            hasMore={!!hasNextPage}
            next={() => fetchNextPage()}
            loader={<Spinner/>}
        >
            <SimpleGrid columns={{
                sm: 1, md: 2, lg: 3, xl: 4,
            }} spacing={6} padding='10px'>
                {isLoading && skeletons.map(skeleton => (
                    <GameCardContainer key={skeleton}><GameCardSkeleton/></GameCardContainer>))}

                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.results.map((game) => (
                            <GameCardContainer key={game.id}>
                                <GameCard game={game}/>
                            </GameCardContainer>
                        ))}
                    </React.Fragment>))
                }
            </SimpleGrid>
        </InfiniteScroll>
    );
};

export default GameGrid;