import React from 'react';
import styles from "./GreetingComponent.module.css";

const GreetingComponent = () => {
    return (
        <div className={styles.greeting_block}>
            <div className={styles.greeting_text}>
                Welcome!
            </div>
        </div>

    );
};

export default GreetingComponent;