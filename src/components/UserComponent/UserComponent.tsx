import React from 'react';
import {NavLink} from "react-router-dom";

import {IUser} from "../../interfaces/IUser";

const UserComponent = (user: IUser) => {

    return (
        <div>
            <NavLink to={user.id.toString()}>{user.id}. {user.name} {user.username}</NavLink>
        </div>
    );
};

export default UserComponent;