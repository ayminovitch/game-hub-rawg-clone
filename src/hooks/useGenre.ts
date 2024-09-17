import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

interface FetchGenreResponse {
    count: number;
    results: Genre[];
}

const useGenre = () => {
    const [genres, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const controller = new AbortController();
    useEffect(() => {
        apiClient.get<FetchGenreResponse>('/genres', {signal: controller.signal})
            .then(res => {
                setGenre(res.data.results);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err)
            });
        return () => controller.abort();
    }, []);
    return {genres, error}
};

export default useGenre;