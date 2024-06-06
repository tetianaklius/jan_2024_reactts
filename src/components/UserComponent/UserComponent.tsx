import React, {FC} from 'react';

import {IUser} from "../../interfaces/IUser";

interface IProps {
    user: IUser
}

const UserComponent: FC<IProps> = ({user}) => {

    return (
        <div>
            {user.id}. {user.name}
        </div>
    );
};

export default UserComponent;