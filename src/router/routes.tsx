import { createBrowserRouter, RouteObject } from "react-router-dom";
import Inicio from "../pages/Inicio";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Inicio />
    }
]

export const router = createBrowserRouter(routes);