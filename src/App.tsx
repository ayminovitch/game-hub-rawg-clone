import {Box, Flex, Grid, GridItem, Show} from '@chakra-ui/react'
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import PlatformSelector from "./components/PlatformSelector.tsx";
import SortSelector from "./components/SortSelector.tsx";
import GameHeading from "./components/GameHeading.tsx";

function App() {

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
                        <GenreList/>
                    </GridItem>
                </Show>
                <GridItem pl='2' area={'main'}>
                    <Box paddingLeft={2}>
                        <GameHeading/>
                        <Flex marginBottom={5}>
                            <Box marginRight={5}>
                                <PlatformSelector/>
                            </Box>
                            <SortSelector/>
                        </Flex>
                    </Box>

                    <GameGrid/>
                </GridItem>
            </Grid>
        </>
    )
}

export default App
