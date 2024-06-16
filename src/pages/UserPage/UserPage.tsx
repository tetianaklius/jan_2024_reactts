import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../redux/store/store";
import {userActions} from "../../redux/slices/usersSlice";
import styles from "./UserPage.module.css";

const UserPage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.usersSlice);

    useEffect(() => {
        if (id) {
            dispatch(userActions.loadUserById(id))
        }
    }, [id]);

    return (
        <div className={styles.main}>
            <div className={styles.user_box}>
                {
                    user &&
                    <div>
                        <p>name: {user.name}</p>
                        <p>email: {user.email}</p>
                        <p>username: {user.username}</p>
                        <p>user id: {user.id}</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default UserPage;