import React from 'react';
import UsersComponent from "../../components/UsersComponent/UsersComponent";
import styles from "./UsersPage.module.css"

const UsersPage = () => {
    return (
        <div className={styles.users_page_basic}>
            <div><b>Users</b></div>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;