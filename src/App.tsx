import {Box, Flex, Grid, GridItem, Show} from '@chakra-ui/react'
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import PlatformSelector from "./components/PlatformSelector.tsx";
import SortSelector from "./components/SortSelector.tsx";
import GameHeading from "./components/GameHeading.tsx";

export interface GameQuery {
    genreId: number | undefined;
    platformId: number | undefined;
    sortOrder: string;
    searchText: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
    return (
        <>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`
                }}
                templateColumns={{
                    base: '1fr',
                    lg: '200px 1fr'
                }}
            >
                <GridItem area={'nav'}>
                    <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
                </GridItem>
                <Show above="lg">
                    <GridItem pl='2' area={'aside'} paddingX={5}>
                        <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id})}
                                   selectedGenreId={gameQuery.genreId}/>
                    </GridItem>
                </Show>
                <GridItem pl='2' area={'main'}>
                    <Box paddingLeft={2}>
                        <GameHeading gameQuery={gameQuery}/>
                        <Flex marginBottom={5}>
                            <Box marginRight={5}>
                                <PlatformSelector selectedPlatformId={gameQuery.platformId}
                                                  onSelectPlatform={(platform) => setGameQuery({
                                                      ...gameQuery,
                                                      platformId: platform.id
                                                  })}/>
                            </Box>
                            <SortSelector selectedSortOrder={gameQuery.sortOrder}
                                          onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
                        </Flex>
                    </Box>

                    <GameGrid gameQuery={gameQuery}/>
                </GridItem>
            </Grid>
        </>
    )
}

export default App
