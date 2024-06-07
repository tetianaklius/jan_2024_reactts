import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

export const HeaderComponent:FC = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={"/"}>home</NavLink></li>
                <li><NavLink to={"users"}>users page</NavLink></li>
                <li><NavLink to={"posts"}>posts page</NavLink></li>
                <li><NavLink to={"userPosts"}>users with posts page</NavLink></li>
                <li><NavLink to={"comments"}>comments page</NavLink></li>
                <li><NavLink to={"postsComments"}>posts with comments page</NavLink></li>
            </ul>
        </div>
    );
};