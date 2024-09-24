import {createBrowserRouter} from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import GameDetailPage from "./pages/GameDetailPage.tsx";

const router = createBrowserRouter([
    {
        path: "/", element: <Layout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'games/:id', element: <GameDetailPage/>}
        ]
    },
])
export default router;