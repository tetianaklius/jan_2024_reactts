import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {postValidator} from "../validators/post.validator";

interface IFormProps {
    user_id: number,
    title: string,
    body: string
}

const FormComponent: FC = () => {
    let {register, handleSubmit, formState: {errors, isValid}} = useForm<IFormProps>({
        mode: "all",
        resolver: JoiResolver(postValidator)
    })

    const send = () => {
    }

    return (
        <div>
            <form onSubmit={handleSubmit(send)}>
                <input type="number"{...register("user_id")}/>
                {errors.user_id && <span>{errors.user_id.message}</span>}
                <br/>
                <input type="text"{...register("title")}/>
                {errors.title && <span>{errors.title.message}</span>}
                <br/>
                <input type="text"{...register("body")}/>
                {errors.body && <span>{errors.body.message}</span>}
                <br/>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormComponent;