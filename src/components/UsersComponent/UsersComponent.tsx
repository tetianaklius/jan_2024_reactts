import React, {useEffect, useState} from 'react';

import {IUser} from "../../interfaces/IUser";
import UserComponent from "../UserComponent/UserComponent";
import {userApiService} from "../../services/users.api.service";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(
        () => {
            userApiService.getAllUsers().then(v => setUsers(v.data));
        }, []
    )

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} id={user.id} name={user.name} username={user.username}/>)
            }
        </div>
    );
};

export default UsersComponent;