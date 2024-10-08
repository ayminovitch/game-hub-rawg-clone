import useGenres from "../hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import useGameQueryStore from "../store.ts";

const GenreList = () => {
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
    const setGenreId = useGameQueryStore(s => s.setGenreId)
    const {data, isLoading, error} = useGenres();
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
                            <Button whiteSpace='normal' textAlign='left' onClick={() => setGenreId(genre.id)}
                                    variant='link'
                                    fontSize='lg'
                                    fontWeight={genre.id === selectedGenreId ? 'bold' : 'light'}>{genre.name}</Button>
                        </HStack>
                    </ListItem>))}
            </List>
        </>
    );
};

export default GenreList;