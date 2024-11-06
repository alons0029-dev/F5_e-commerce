
// REACT-ROUTER-DOM Components
import { createBrowserRouter } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";
import CreateCharacter from "../pages/CreateCharacter/CreateCharacter";

/* ROUTER */
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/create-character",
        element: <CreateCharacter />
    }
])