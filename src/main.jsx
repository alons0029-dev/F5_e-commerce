
// REACT Components
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// REACT-ROUTER-DOM Components
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

// Style
import "./index.css";

/* FUNCTIONALITY */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
