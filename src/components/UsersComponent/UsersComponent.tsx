import React from 'react';

import {useAppSelector} from "../../redux/store/store";
import UserComponent from "../UserComponent/UserComponent";
import styles from "./UsersComponent.module.css"

const UsersComponent = () => {
    const {users, isLoaded} = useAppSelector(state => state.usersSlice);

    return (
        <div className={styles.main}>
            <div className={styles.users_box}>
                {
                    isLoaded ? users.map(user => <UserComponent key={user.id} user={user}/>) : <h3>Loading...</h3>
                }
            </div>
        </div>
    );
};

export default UsersComponent;