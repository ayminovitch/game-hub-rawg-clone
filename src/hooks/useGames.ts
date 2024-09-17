import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

export interface Game {
    id: number;
    name: string;
    background_image: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[]

}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    const controller = new AbortController();

    useEffect(() => {
        const originalGames = [...games];
        apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})
            .then((res) => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setGames(originalGames);
            });
        return () => controller.abort();
    }, [])
    return {games, error, setError, setGames};
};

export default useGames;