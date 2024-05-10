import React, {useState} from 'react';
import {usePrevious} from "../hooks/usePrevious";
import styles from "./PreviousComponent.module.css";

const PreviousComponent = () => {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    return (
        <div>
            <p><b>count:</b> {count}</p>
            <p><b>previous:</b> {prevCount}</p>
            <button className={styles.button} onClick={() => setCount(count + 50)}>upd</button>
        </div>
    );
};

export default PreviousComponent;