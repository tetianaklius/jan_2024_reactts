import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {IAuthData} from "../../interfaces/IAuthData";
import {authService} from "../../services/authService";
import styles from "./FormComponent.module.css";
import {authValidator} from "../../validators/auth.validator";

const FormComponent = () => {
    const {handleSubmit, register, formState: {errors}} = useForm<IAuthData>({
        defaultValues: {
            username: "Teti",
            password: "password"
        },
        mode: "all",
        resolver: joiResolver(authValidator)
    })
    const [isAuthState, setIsAuthState] = useState<boolean>(false);

    const authenticate = async (formData: IAuthData) => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth)
    }

    return (
        <div className={styles.form}>
            <h3>login form</h3>
            <div className={styles.auth_status}>
                {
                    isAuthState ? "auth" : "not auth"
                }
            </div>
            <form onSubmit={handleSubmit(authenticate)}>
                <label>username:
                    <br/>
                    <input type="text" {...register("username")}/>
                    {errors.username && <span>{errors.username.message}</span>}
                </label>
                <br/>
                <label>password:
                    <br/>
                    <input type="text" {...register("password")}/>
                    {errors.password && <span>{errors.password.message}</span>}
                </label>
                <br/>
                <button>login</button>
            </form>
        </div>
    );
};

export default FormComponent;