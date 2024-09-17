import {Grid, GridItem, Show} from '@chakra-ui/react'
import NavBar from "./components/NavBar.tsx";

function App() {
    return (
        <>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`
                }}
            >
                <GridItem area={'nav'}>
                    <NavBar/>
                </GridItem>
                <Show above="lg">
                    <GridItem pl='2' bg='pink.300' area={'aside'}>
                        Aside
                    </GridItem>
                </Show>
                <GridItem pl='2' bg='green.300' area={'main'}>
                    Main
                </GridItem>
            </Grid>
        </>
    )
}

export default App
