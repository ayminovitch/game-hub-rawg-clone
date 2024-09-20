import useGenre, {Genre} from "../hooks/useGenre.ts";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface GenreListProps {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: GenreListProps) => {
    const {data, isLoading, error} = useGenre();
    if (error) return null;
    if (isLoading) return <Spinner/>

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {data?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image objectFit='cover' boxSize='32px' borderRadius={8}
                                   src={getCroppedImageUrl(genre.image_background)}/>
                            <Button whiteSpace='normal' textAlign='left' onClick={() => onSelectGenre(genre)}
                                    variant='link'
                                    fontSize='lg'
                                    fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'light'}>{genre.name}</Button>
                        </HStack>
                    </ListItem>))}
            </List>
        </>
    );
};

export default GenreList;