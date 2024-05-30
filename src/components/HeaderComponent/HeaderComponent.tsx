import React from 'react';
import {NavLink} from "react-router-dom";

import styles from "../HeaderComponent/HeaderComponent.module.css"

const HeaderComponent = () => {
    return (
        <div className={styles.header_block}>
            <div><NavLink to={"/"}>Auth page</NavLink></div>
            <div><NavLink to={"cars"}>Cars page</NavLink></div>
        </div>
    );
};

export default HeaderComponent;