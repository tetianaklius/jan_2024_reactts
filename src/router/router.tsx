import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import UsersPage from "../pages/UsersPage/UsersPage";
import PostsPage from "../pages/PostsPage/PostsPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";
import MainLayout from "../layout/MainLayout/MainLayout";

export const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <h2>Something went wrong. Please check the URL!</h2>, // зробити окремою сторінкою з посилання на home
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "users",
                element: <UsersPage/>
            },
            {
                path: "posts",
                element: <PostsPage/>
            },
            {
                path: "comments",
                element: <CommentsPage/>
            },
        ]
    }
])