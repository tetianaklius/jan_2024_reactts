import React from 'react';

import UsersComponent from "../../components/UsersComponent/UsersComponent";
import styles from "./UsersPage.module.css"
import PostsOfOneUserComponent from "../../components/PostsOfOneUserComponent/PostsOfOneUserComponent";

const UsersPage = () => {

    return (
        <div className={styles.users_page_basic}>
            <div><b>Users</b></div>
            <UsersComponent/>
            <PostsOfOneUserComponent/>
        </div>
    );
};

export default UsersPage;