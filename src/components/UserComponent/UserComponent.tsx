import React, {FC} from 'react';

import {IUser} from "../../models/IUser";
import {useNavigate} from "react-router-dom";
import moreStyles from "../PostComponent/PostComponent.module.css"

interface IProps {
    user: IUser
}

const UserComponent: FC<IProps> = ({user}) => {
    const navigate = useNavigate();

    return (
        <div>
            {user.id}. {user.name}
            <button
                onClick={() => {
                    navigate(user.id.toString())
                }}
                className={moreStyles.details_button}>
                details
            </button>
        </div>
    );
};

export default UserComponent;