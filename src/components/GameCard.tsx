import {Game} from "../hooks/useGames.ts";
import {Card, CardBody, Heading, Image} from "@chakra-ui/react";

interface GameCardProps {
    game: Game;
}

const GameCard = ({game}: GameCardProps) => {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={game.background_image}></Image>
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;