import {Box, Flex, Grid, GridItem, Show} from "@chakra-ui/react";
import GenreList from "../components/GenreList.tsx";
import GameHeading from "../components/GameHeading.tsx";
import PlatformSelector from "../components/PlatformSelector.tsx";
import SortSelector from "../components/SortSelector.tsx";
import GameGrid from "../components/GameGrid.tsx";

const HomePage = () => {
    return (
        <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"aside main"`
            }}
            templateColumns={{
                base: '1fr',
                lg: '200px 1fr'
            }}
        >
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
    );
};

export default HomePage;