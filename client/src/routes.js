import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Base from "./pages/home/Base";
import NotFound from "./shared/NotFound";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Admin from "./pages/admin/Admin"
import User from "./pages/user/User";
import Guest from "./middleware/Guest";

export const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "",
                element: <Base />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            //Guest middleware
            {
                element: <Guest/>,
                children: [
                    {
                        path: "/login",
                        element: <Login />,
                    },
                    {
                        path: "/register",
                        element: <Register />,
                    }
                ]
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },

            //admin middleware
            {
                element: <Admin/>,
                children: [
                    {
                        path: "/admin",
                        element: <Admin />,
                    }
                ]
            },
            {
                path: "/admin",
                element: <Admin />,
            },
            {
                path: "/user",
                element: <User />,
            },
            {
                path: "*",
                element: <NotFound/>,
            },
        ]
    },
  ]);