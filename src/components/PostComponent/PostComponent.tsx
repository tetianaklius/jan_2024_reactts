import React, {FC} from 'react';

import {IPost} from "../../interfaces/IPost";
import {storeX} from "../../context/ContextProvider";
import styles from "../PostComponent/PostComponent.module.css";
import moreStyles from "../CommentComponent/CommentComponent.module.css";

interface IProps {
    post: IPost
}

const PostComponent: FC<IProps> = ({post}) => {
    const {postsStore: {setChosenPost}} = storeX();

    return (
        <div className={styles.post_box}>
            {post.id}. {post.title}
            <button onClick={() => setChosenPost(post)} className={moreStyles.choose_button}>choose post</button>
        </div>
    );
};

export default PostComponent;