import React, {FC} from 'react';

import {IComment} from "../../interfaces/IComment";
import styles from "../CommentComponent/CommentComponent.module.css"
import {storeX} from "../../context/ContextProvider";

interface IProps {
    comment: IComment
}

const CommentComponent: FC<IProps> = ({comment}) => {
    const {commentsStore: {setChosenComments}} = storeX();


    return (
        <div className={styles.comment_box}>
            <p> comment id: {comment.id}</p>
            <p> post id: {comment.postId}</p>
            <p> comment email: {comment.email}</p>
            <p><b>"{comment.body}"</b></p>
            <button
                onClick={() => {
                    setChosenComments(comment);
                }
                } className={styles.choose_button}>choose comment
            </button>
        </div>
    );
};

export default CommentComponent;