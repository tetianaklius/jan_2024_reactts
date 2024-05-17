import React from 'react';
import styles from "./FooterComponent.module.css"

const FooterComponent = () => {
    return (
        <div className={styles.footer_block}>
            <div className={styles.footer_text}> Footer</div>
        </div>
    );
};

export default FooterComponent;