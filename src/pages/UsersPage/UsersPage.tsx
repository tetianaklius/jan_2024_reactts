import React, {useEffect} from 'react';

import {useAppDispatch} from "../../redux/store/store";
import {userActions} from "../../redux/slices/usersSlice";
import UsersComponent from "../../components/UsersComponent/UsersComponent";

const UsersPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, [])

    return (
        <div>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;