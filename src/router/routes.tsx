import { createBrowserRouter, RouteObject } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Album from "../pages/Album";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Inicio />
    },
    {
        path: "/mi-album",
        element: <Album />
    }
]

export const router = createBrowserRouter(routes);