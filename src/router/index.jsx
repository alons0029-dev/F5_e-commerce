
// REACT-ROUTER-DOM Components
import { createBrowserRouter } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";
import Characters from "../pages/Characters/Characters";
import CreateCharacter from "../pages/CreateCharacter/CreateCharacter";
import UpdateCharacter from "../pages/UpdateCharacter/UpdateCharacter";
import NotFound from "../pages/NotFound/NotFound";

/* ROUTER */
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/characters",
        element: <Characters />
    },
    {
        path: "/create",
        element: <CreateCharacter />
    },
    {
        path: "update/:id",
        element: <UpdateCharacter />
    },
    {
        path: "*",
        element: <NotFound />
    }
])