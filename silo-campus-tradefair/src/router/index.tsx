import { createBrowserRouter } from "react-router-dom";
import HomePage from "../layouts/HomePage";
import Registeration from "../layouts/Registeration";

import Home from "../pages/Home";
import About from "../pages/About";
import Events from "../pages/Events";
import Contact from "../pages/Contact";

import ImoState from "../pages/registeration/ImoState";
import LagosState from "../pages/registeration/LogosState";
import Portharcourt from "../pages/registeration/PortHacourt";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/events",
                element: <Events />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    },
    {
        path: "/register",
        element: <Registeration />,
        children: [
            {
                path: "/register/imo-state",
                element: <ImoState />
            },
            {
                path: "/register/lagos",
                element: <LagosState />
            },
            {
                path: "/register/portharcourt",
                element: <Portharcourt />
            }
        ]
    }
])
