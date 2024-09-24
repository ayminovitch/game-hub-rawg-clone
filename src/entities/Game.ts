import {Platform} from "./Platform.ts";

export interface Game {
    id: number;
    name: string;
    description_raw: string;
    background_image: string;
    slug: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}