import React, {FC} from 'react';
import {IUserModel} from "../models/UserModel";

interface IProps {
    user: IUserModel;
}

type IPropsType = IProps & { children?: React.ReactNode } & { lift?: (userId: number) => void };
const User: FC<IPropsType> = ({user, lift}) => {

    const onClickHandler = () => {
        if (lift) {
            lift(user.id)
        }
    }

    return (
        <div>
            <div>{user.id}. {user.firstName} {user.lastName}</div>
            <div>{user.age} y.o., {user.address.city}</div>
            <div>phone: {user.phone}</div>
            <div>email: {user.email}</div>
            <button onClick={onClickHandler}>Get all posts of user</button>
        </div>
    );
};

export default User;