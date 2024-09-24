import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import {Box, Heading, Text} from "@chakra-ui/react";
import NavBar from "../components/NavBar.tsx";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <NavBar/>
            <Box padding={5}>
                <Heading>Oops...</Heading>
                <Text>{isRouteErrorResponse(error) ? 'Invalid Page' : 'Unexpected Error'}</Text>
            </Box>
        </>
    );
};

export default ErrorPage;