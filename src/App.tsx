import {Grid, GridItem, Show} from '@chakra-ui/react'
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenre.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {Platform} from "./hooks/usePlatforms.ts";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
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
                        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre}/>
                    </GridItem>
                </Show>
                <GridItem pl='2' area={'main'}>
                    <PlatformSelector selectedPlatform={selectedPlatform}
                                      onSelectPlatform={(platform) => setSelectedPlatform(platform)}/>
                    <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
                </GridItem>
            </Grid>
        </>
    )
}

export default App
