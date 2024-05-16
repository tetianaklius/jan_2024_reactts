import React, {useEffect, useState} from 'react';
import {IUser} from "../../interfaces/IUser";
import {services} from "../../services/api.service";
import UserComponent from "../UserComponent/UserComponent";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(
        () => {
            services.userApiService.getAllUsers().then(v => setUsers(v.data));
        }, [users]
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