import React, {FC} from 'react';

import UserComponent from "../UserComponent/UserComponent";
import {storeX} from "../../context/ContextProvider";

const UsersComponent:FC = () => {
    const {usersStore: {allUsers}} = storeX();

    return (
        <div>
            {allUsers.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;