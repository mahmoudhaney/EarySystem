import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Base from "./pages/home/Home";
import NotFound from "./shared/NotFound";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Admin from "./pages/admin/Admin"
import User from "./pages/user/User";
import Questions from "./pages/admin/ManageQuestiosn/Questions";
import AddQuestion from "./pages/admin/ManageQuestiosn/AddQuestion";
import UpdateQuestion from "./pages/admin/ManageQuestiosn/UpdateQuestion";
import Responses from "./pages/admin/ManageResponses/Responses";
import AddResponse from "./pages/admin/ManageResponses/AddResponse";
import UpdateResponse from "./pages/admin/ManageResponses/UpdateResponse";
import Users from "./pages/admin/ManageUsers/Users";
import AddUser from "./pages/admin/ManageUsers/AddUser";
import UpdateUser from "./pages/admin/ManageUsers/UpdateUser";
import Test from "./pages/user/pages/Test";
import History from "./pages/user/pages/History";

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
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/admin",
                children: [
                    {
                        path: "",
                        element: <Admin />,
                    },
                    {
                        path: "my-profile",
                        element: <Admin />,
                    },
                    {
                        path: "manage-users",
                        children: [
                            {
                                path: "",
                                element: <Users />,
                            },
                            {
                                path: "add",
                                element: <AddUser/>,
                            },
                            {
                                path: ":id",
                                element: <UpdateUser />,
                            },
                        ]
                    },
                    {
                        path: "manage-questions",
                        children: [
                            {
                                path: "",
                                element: <Questions />,
                            },
                            {
                                path: "add",
                                element: <AddQuestion/>,
                            },
                            {
                                path: ":id",
                                element: <UpdateQuestion />,
                            },
                        ]
                    },
                    {
                        path: "manage-responses",
                        children: [
                            {
                                path: "",
                                element: <Responses />,
                            },
                            {
                                path: "add",
                                element: <AddResponse/>,
                            },
                            {
                                path: ":id",
                                element: <UpdateResponse />,
                            },
                        ]
                    },
                ]
            },
            {
                path: "/user",
                children: [
                    {
                        path: "",
                        element: <User />,
                    },
                    {
                        path: "my-profile",
                        element: <User />,
                    },
                    {
                        path: "test",
                        element: <Test />,
                    },
                    {
                        path: "history",
                        element: <History />,
                    },
                ]
            },
            {
                path: "*",
                element: <NotFound/>,
            },
        ]
    },
]);