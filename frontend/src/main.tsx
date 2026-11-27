// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/tokens.css';
import './index.css';

import Home from './pages/Home';
import About from './pages/About';
import ElektroDienstleistungenPrivatkunden from './pages/Elektro-Dienstleistungen-Privatkunden';
import Impressum from './pages/Impressum';
import Jobs from './pages/Jobs';
import ElektroDienstleistungenGewerbekunden from './pages/Elektro-Dienstleistungen-Gewerbekunden';
import SmartHomeLoesungen from './pages/Smart-Home-Loesungen';
import Notfallreparaturen from './pages/Notfallreparaturen';
import LichtdesignundInstallation from './pages/Lichtdesign-und-Installation';
import NotFound from './pages/Notfound';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/Home',
                element: <Home />,
            },
            {
              path: '/About',
              element: <About />,
            },
            {
                path: '/Jobs',
                element: <Jobs />,
              },
            {
                path: '/Elektro-Dienstleistungen-Privatkunden',
                element: <ElektroDienstleistungenPrivatkunden />,
            },
            {
                path: '/Elektro-Dienstleistungen-Gewerbekunden',
                element: <ElektroDienstleistungenGewerbekunden />,
            },
            {
                path: '/Smart-Home-Loesungen',
                element: <SmartHomeLoesungen />,
            },
            {
                path: '/Lichtdesign-und-Installation',
                element: <LichtdesignundInstallation />,
            },
            {
                path: '/Notfallreparaturen',
                element: <Notfallreparaturen />,
            },
            {
                path: '/Impressum',
                element: <Impressum />,
              },
              {
                path: '*',
                element: <NotFound />,
            },

        ]
    }
]);

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}