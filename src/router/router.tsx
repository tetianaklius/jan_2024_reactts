import {createBrowserRouter, RouteObject} from "react-router-dom";

import App from "../App";
import UserPostsPage from "../pages/UserPostsPage/UserPostsPage";
import PostsPage from "../pages/PostsPage/PostsPage";
import UsersPage from "../pages/UsersPage/UsersPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";
import PostCommentsPage from "../pages/PostCommentsPage/PostCommentsPage";


const routes: RouteObject[] = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "users",
                element: <UsersPage/>
            },
            {
                path: "posts",
                element: <PostsPage/>
            },
            {
                path: "userPosts",
                element: <UserPostsPage/>
            },
            {
                path: "comments",
                element: <CommentsPage/>
            },
            {
                path: "postComments",
                element: <PostCommentsPage/>
            },
        ]
    }
]
export const router = createBrowserRouter(routes)