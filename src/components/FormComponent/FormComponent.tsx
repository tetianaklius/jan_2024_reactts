import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {IAuthData} from "../../interfaces/IAuthData";
import {authService} from "../../services/authService";
import styles from "./FormComponent.module.css"

const FormComponent = () => {
    const {handleSubmit, register} = useForm<IAuthData>({defaultValues: {username: "Teti", password: "password"}})
    const [isAuthState, setIsAuthState] = useState<boolean>(false);

    const authenticate = async (formData: IAuthData) => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth)
    }

    return (
        <div className={styles.form}>
            <h3>login form</h3>
            <div>
                {
                    isAuthState ? "auth" : "not auth"
                }
            </div>
            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register("username")}/>
                <input type="text" {...register("password")}/>
                <button>login</button>
            </form>
        </div>
    );
};

export default FormComponent;