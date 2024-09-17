import useGenre, {Genre} from "../hooks/useGenre.ts";
import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface GenreListProps {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: GenreListProps) => {
    const {data, isLoading, error} = useGenre();
    if (error) return null;
    if (isLoading) return <Spinner/>
    
    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                        <Button onClick={() => onSelectGenre(genre)} variant='link'
                                fontSize='lg'>{genre.name}</Button>
                    </HStack>
                </ListItem>))}
        </List>
    );
};

export default GenreList;