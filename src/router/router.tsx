import {createBrowserRouter, RouteObject} from "react-router-dom";

import App from "../App";
import UsersPostsPage from "../pages/UsersPostsPage/UsersPostsPage";
import PostsPage from "../pages/PostsPage/PostsPage";
import UsersPage from "../pages/UsersPage/UsersPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";
import PostsCommentsPage from "../pages/PostsCommentsPage/PostsCommentsPage";


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
                element: <UsersPostsPage/>
            },
            {
                path:"comments",
                element: <CommentsPage/>
            },
            {
                path:"postsComments",
                element: <PostsCommentsPage/>
            }
        ]
    }
]
export const router = createBrowserRouter(routes)