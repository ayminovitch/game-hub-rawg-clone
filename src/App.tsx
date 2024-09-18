import {Box, Flex, Grid, GridItem, Show} from '@chakra-ui/react'
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenre.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {Platform} from "./hooks/usePlatforms.ts";
import SortSelector from "./components/SortSelector.tsx";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
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
                    <NavBar/>
                </GridItem>
                <Show above="lg">
                    <GridItem pl='2' area={'aside'} paddingX={5}>
                        <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
                                   selectedGenre={gameQuery.genre}/>
                    </GridItem>
                </Show>
                <GridItem pl='2' area={'main'}>
                    <Flex paddingLeft={2} marginBottom={5}>
                        <Box marginRight={5}>
                            <PlatformSelector selectedPlatform={gameQuery.platform}
                                              onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
                        </Box>
                        <SortSelector selectedSortOrder={gameQuery.sortOrder}
                                      onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
                    </Flex>
                    <GameGrid gameQuery={gameQuery}/>
                </GridItem>
            </Grid>
        </>
    )
}

export default App
