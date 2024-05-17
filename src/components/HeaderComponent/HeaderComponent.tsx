import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./HeaderComponent.module.css";

const HeaderComponent = () => {
    return (
        <div className={styles.navbar}>
            <p className={styles.navItem}><NavLink to={"/"}>Home</NavLink></p>
            <p className={styles.navItem}><NavLink to={"users"}>Users</NavLink></p>
            <p className={styles.navItem}><NavLink to={"posts"}>Posts</NavLink></p>
            <p className={styles.navItem}><NavLink to={"comments"}>Comments</NavLink></p>
        </div>
    );
};

export default HeaderComponent;