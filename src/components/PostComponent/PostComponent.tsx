import React from 'react';

import {IPost} from "../../interfaces/IPost";
import {useNavigate} from "react-router-dom";
import styles from "../PostComponent/PostComponent.module.css"

const PostComponent = (post: IPost) => {
    const navigate = useNavigate();

    return (
        <div className={styles.post}>
            <p>{post.id}. <span>{post.title}</span></p>
            <p>userId: {post.userId}</p>
            <p>{post.body}</p>

            {post.button === "on" &&
                <button
                    onClick={() => {
                        navigate(`${post.id}`)
                    }
                    } className={styles.show_comments}>
                    Show comments to this post
                </button>}
        </div>
    );
};

export default PostComponent;