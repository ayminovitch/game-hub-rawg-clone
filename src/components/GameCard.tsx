import {Game} from "../hooks/useGames.ts";
import {Card, CardBody, Heading, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";

interface GameCardProps {
    game: Game;
}

const GameCard = ({game}: GameCardProps) => {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={game.background_image}></Image>
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
            </CardBody>
        </Card>
    );
};

export default GameCard;