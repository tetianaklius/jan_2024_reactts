import React, {FC} from 'react';
import {useToggle} from "../hooks/useToggle";
import styles from "./ToggleComponent.module.css"

export const ToggleComponent: FC = () => {

    let [value, changeValue] = useToggle(true);

    return (
        <div className={styles.main}>
            status: <b>{value.toString()}</b>
            <br/>
            <button className={styles.button} onClick={() => (changeValue(value))}>change</button>
        </div>
    );
};

