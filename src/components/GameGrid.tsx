import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";
import {Text} from "@chakra-ui/react";

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[]

}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const originalGames = [...games];
        apiClient.get<FetchGamesResponse>('/games')
            .then((res) => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setGames(originalGames);
            });
    }, [])
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