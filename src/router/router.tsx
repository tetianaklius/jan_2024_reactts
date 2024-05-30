import {createBrowserRouter} from "react-router-dom";

import AuthPage from "../pages/AuthPage/AuthPage";
import CarsPage from "../pages/CarsPage/CarsPage";
import MainLayout from "../layouts/MainLayout";

export const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <MainLayout/>,
        children: [
            {
                index: true,
                element: <AuthPage/>
            },
            {
                path: "/cars",
                element: <CarsPage/>
            }
        ]
    }
])