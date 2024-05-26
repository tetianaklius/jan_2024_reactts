import {createBrowserRouter} from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import UsersPage from "../pages/UsersPage/UsersPage";
import PostsPage from "../pages/PostsPage/PostsPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";
import MainLayout from "../layout/MainLayout/MainLayout";
import PostsOfOneUserComponent from "../components/PostsOfOneUserComponent/PostsOfOneUserComponent";
import CommentsOfOnePostComponent from "../components/CommentsOfOnePostComponent/CommentsOfOnePostComponent";

export const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <h2>Something went wrong. Please check the URL!</h2>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "users",
                element: <UsersPage/>,
                children: [
                    {
                        path: ":id",
                        element: <PostsOfOneUserComponent/>
                    },
                ]
            },
            {
                path: "posts",
                element: <PostsPage/>,
                children: [
                    {
                        path: ":id",
                        element: <CommentsOfOnePostComponent/>
                    }
                ]
            },
            {
                path: "comments",
                element: <CommentsPage/>
            },
        ]
    }
])