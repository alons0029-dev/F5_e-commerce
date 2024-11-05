
// REACT-ROUTER-DOM Components
import { createBrowserRouter } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";

/* ROUTER */
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    }
])