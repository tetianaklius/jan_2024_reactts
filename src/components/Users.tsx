import React, {FC, useEffect, useState} from 'react';
import User from "./User";
import {IUserModel} from "../models/UserModel";
import {getAllUsers} from "../services/users_posts.api.service";

type IPropsType = { lift?: (UserId: number) => void };

const Users: FC<IPropsType> = ({lift}) => {
    const [users, setUsers] = useState<IUserModel[]>([]);


    useEffect(() => {
            getAllUsers().then(({data}) => setUsers(data.users))
        }, []
    )

    return (
        <div>
            {users.map(user => <User lift={lift} key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;