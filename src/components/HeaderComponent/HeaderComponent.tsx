import React from 'react';
import {NavLink} from "react-router-dom";

import styles from "../HeaderComponent/HeaderComponent.module.css"

export const HeaderComponent = () => {
    return (
        <div className={styles.header_box}>
            <ul>
                <li><NavLink to={"/"}>home</NavLink></li>
                <li><NavLink to={"users"}>users page</NavLink></li>
                <li><NavLink to={"posts"}>posts page</NavLink></li>
                <li><NavLink to={"userPosts"}>users with posts page</NavLink></li>
                <li><NavLink to={"comments"}>comments page</NavLink></li>
                <li><NavLink to={"postComments"}>posts with comments page</NavLink></li>
            </ul>
        </div>
    );
};