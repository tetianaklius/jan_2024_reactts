import React, {FC} from 'react';

import {IUser} from "../../interfaces/IUser";
import {storeX} from "../../context/ContextProvider";
import styles from "../UserComponent/UserComponent.module.css";
import moreStyles from "../CommentComponent/CommentComponent.module.css";

interface IProps {
    user: IUser
}

const UserComponent: FC<IProps> = ({user}) => {
    const {usersStore: {setChosenUser}} = storeX();

    return (
        <div className={styles.user_box}>
            {user.id}. {user.name}
            <button onClick={() => setChosenUser(user)} className={moreStyles.choose_button}>choose user</button>
        </div>
    );
};

export default UserComponent;