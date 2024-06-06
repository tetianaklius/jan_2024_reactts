import React, {useContext} from 'react';

import UserComponent from "../UserComponent/UserComponent";
import {SomeContext} from "../../context/ContextProvider";

const UsersComponent = () => {

    const {userStore: {allUsers}} = useContext(SomeContext);

    return (
        <div>
            {allUsers.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;