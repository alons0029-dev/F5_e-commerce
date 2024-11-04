
// REACT-ROUTER-DOM Components
import { createBrowserRouter } from "react-router-dom";

// Pages
import CharacterForm from "../pages/CharacterForm/CharacterForm";


/* ROUTER */
export const router = createBrowserRouter([
    {
        path: "/",
        element: <CharacterForm />
    }
])