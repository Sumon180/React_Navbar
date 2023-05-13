import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

const router: RouteObject[] = [
    {
        path: "/",
        element: <Home />,

    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/about",
        element: <About />
    },
]

export default router;