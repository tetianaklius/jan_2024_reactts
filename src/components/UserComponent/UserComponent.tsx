import React from 'react';
import {IUser} from "../../interfaces/IUser";

const UserComponent = (user: IUser) => {

    return (
        <div>
            {user.id}. {user.name} {user.username}
        </div>
    );
};

export default UserComponent;