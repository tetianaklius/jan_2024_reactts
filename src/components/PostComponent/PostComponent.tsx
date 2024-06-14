import React from 'react';

import {IPost} from "../../models/IPost";
import {useNavigate} from "react-router-dom";
import styles from "./PostComponent.module.css"

interface IProps {
    post: IPost
}

const PostComponent = ({post}: IProps) => {
    const navigate = useNavigate();

    return (
        <div>
            {post.id}. {post.title}
            <button
                onClick={() => {
                    navigate(post.id.toString())
                }}
                className={styles.details_button}>
                details
            </button>
        </div>
    );
};

export default PostComponent;