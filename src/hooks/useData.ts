import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
            .then(res => {
                setData(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err)
                setLoading(false)
            });
        return () => controller.abort();
    }, []);
    return {data, error, isLoading}
};

export default useData;