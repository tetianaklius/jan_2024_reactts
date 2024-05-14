import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {postValidator} from "../validators/post.validator";
import {joiResolver} from "@hookform/resolvers/joi";
import {getAllPosts, postPost} from "../services/post.service";
import {IPost} from "../interfaces/interfaces";
import PostsComponent from "./PostsComponent";

const FormComponent: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [newPost, setNewPost] = useState<IPost | null>(null);

    let {register, handleSubmit, formState: {errors}} = useForm<IPost>({
        mode: "all",
        resolver: joiResolver(postValidator)
    })

    const send = (formObject: IPost) => {
        postPost(formObject).then(v => {
            console.log(v.status, v.data);
            setNewPost(v.data);
        });
        getAllPosts().then(({data}) => {
            setPosts(data);
        });
        resetForm();
    }

    const resetForm = () => {
        let form1 = document.forms[0];
        form1.reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(send)} name={"post_create_form"}>
                <label>userId:
                    <br/>
                    <input id={"input_1"} type="number"{...register("userId")}/>
                    {errors.userId && <span>{errors.userId.message}</span>}
                </label>
                <br/>
                <label>title: <br/>
                    <input id={"input_2"} type="text"{...register("title")}/>
                    {errors.title && <span>{errors.title.message}</span>}
                </label>
                <br/>
                <label>post body: <br/>
                    <input id={"input_3"} type="text"{...register("body")}/>
                    {errors.body && <span>{errors.body.message}</span>}
                </label>
                <br/>
                <button>send</button>
            </form>
            <div>
                {
                    posts && <div><PostsComponent posts={posts}/></div>
                }
                {newPost && <div>
                    <p> userId: {newPost?.userId}</p>
                    <p> postId: {newPost?.id}</p>
                    <p> title: {newPost?.title}</p>
                    <p> body: {newPost?.body}</p>
                </div>}
            </div>
        </div>
    );
};

export default FormComponent;