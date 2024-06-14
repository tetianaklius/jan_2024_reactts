import React from 'react';
import {Link} from "react-router-dom";

import styles from "./HeaderComponent.module.css"

const HeaderComponent = () => {
    return (
        <div className={styles.header_common}>
            <ul className={styles.nav_bar}>
                <li><Link to={""}>home</Link></li>
                <li><Link to={"users"}>users</Link></li>
                <li><Link to={"posts"}>posts</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;