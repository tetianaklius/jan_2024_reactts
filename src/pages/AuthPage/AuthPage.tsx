import React from 'react';

import FormComponent from "../../components/FormComponent/FormComponent";
import styles from "./AuthPage.module.css"

const AuthPage = () => {
    return (
        <div className={styles.common}>
            <FormComponent/>
        </div>
    );
};

export default AuthPage;