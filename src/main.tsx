import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import App from './App.tsx'
import theme from './theme';
import './index.css'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            <QueryClientProvider client={queryClient}>
                <App/>
            </QueryClientProvider>
        </ChakraProvider>
    </StrictMode>,
)
