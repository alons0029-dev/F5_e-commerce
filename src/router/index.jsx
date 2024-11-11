
// REACT-ROUTER-DOM Components
import { createBrowserRouter } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";
import CharacterListPage from "../pages/CharacterListPage/CharacterListPage";
import CharacterFormPage from "../pages/CharacterFormPage/CharacterFormPage";
import NotFound from "../pages/NotFound/NotFound";

/* ROUTER */
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/characters",
        element: <CharacterListPage />
    },
    {
        path: "/create",
        element: <CharacterFormPage />
    },
    {
        path: "/update/:id",
        element: <CharacterFormPage />
    },
    {
        path: "*",
        element: <NotFound />
    }
])