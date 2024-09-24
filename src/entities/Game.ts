import {Platform} from "./Platform.ts";
import {Genre} from "./Genre.ts";
import {Publisher} from "./Publisher.ts";

export interface Game {
    id: number;
    name: string;
    description_raw: string;
    background_image: string;
    publishers: Publisher[];
    genres: Genre[];
    slug: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}