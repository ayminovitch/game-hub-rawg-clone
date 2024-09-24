import React from "react";
import {Box, SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
    const {data, error, isLoading, fetchNextPage, hasNextPage} = useGames();
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
                                <Box animation="bounce">
                                    <GameCard game={game}/>
                                </Box>
                            </GameCardContainer>
                        ))}
                    </React.Fragment>))
                }
            </SimpleGrid>
        </InfiniteScroll>
    );
};

export default GameGrid;