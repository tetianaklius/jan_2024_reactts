import {createBrowserRouter} from "react-router-dom";

import AuthPage from "../pages/AuthPage/AuthPage";
import CarsPage from "../pages/CarsPage/CarsPage";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";

export const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {
                index: true,
                element: <AuthPage/>
            },
            {
                path: "/cars",
                element: <CarsPage/>,
            }
        ]
    }
])