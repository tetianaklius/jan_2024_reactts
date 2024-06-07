import React, {FC} from 'react';

import {IComment} from "../../interfaces/IComment";
import styles from "../CommentComponent/CommentComponent.module.css"

interface IProps {
    comment: IComment
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div className={styles.comment_box}>
            <p> comment id: {comment.id}</p>
            <p> post id: {comment.postId}</p>
            <p> comment name: {comment.name}</p>
            <p> comment email: {comment.email}</p>
            <p><b>"{comment.body}"</b></p>
        </div>
    );
};

export default CommentComponent;