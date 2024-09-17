import {Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
    const {games, error} = useGames();
    return (
        <>
            {error && <Text color="red">{error}</Text>}
            <ul>
                {games.map((game) => (<li key={game.id}>{game.name}</li>))}
            </ul>
        </>
    );
};

export default GameGrid;