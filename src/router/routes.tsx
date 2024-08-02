import { createBrowserRouter, RouteObject } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Album from "../pages/Album";
import Laminas from "../pages/Laminas";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Inicio />
    },
    {
        path: "/mi-album",
        element: <Album />
    },
    {
        path: "/obtener-laminas",
        element: <Laminas />
    }
]

export const router = createBrowserRouter(routes);