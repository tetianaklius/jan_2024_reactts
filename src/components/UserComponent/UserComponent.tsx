import React, {FC} from 'react';

import {IUser} from "../../interfaces/IUser";
import {storeX} from "../../context/ContextProvider";

interface IProps {
    user: IUser
}

const UserComponent: FC<IProps> = ({user}) => {
    const {usersStore: {setChosenUser}} = storeX();

    return (
        <div>
            {user.id}. {user.name}
            <button onClick={() => setChosenUser(user)}>choose user</button>
        </div>
    );
};

export default UserComponent;