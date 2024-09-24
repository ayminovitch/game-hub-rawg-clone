import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import theme from './theme';
import './index.css'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {RouterProvider} from "react-router-dom";
import routes from "./routes.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={routes}/>
                <ReactQueryDevtools/>
            </QueryClientProvider>
        </ChakraProvider>
    </StrictMode>,
)
