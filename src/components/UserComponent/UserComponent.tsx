import React, {FC, useContext} from 'react';

import {IUser} from "../../interfaces/IUser";
import {SomeContext} from "../../context/ContextProvider";

interface IProps {
    user: IUser
}

const UserComponent: FC<IProps> = ({user}) => {
    const {userStore: {setChosenUser}} = useContext(SomeContext);

    return (
        <div>
            {user.id}. {user.name}
            <button onClick={() => setChosenUser(user)}>choose user</button>
        </div>
    );
};

export default UserComponent;