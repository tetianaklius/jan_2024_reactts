import React, {FC} from 'react';

import styles from "../CommentComponent/CommentComponent.module.css"
import {IComment} from "../../interfaces/IComment";

interface IProps {
    comment: IComment
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div className={styles.comment_box}>
            <p> comment id: {comment.id}</p>
            <p> post id: {comment.postId}</p>
            <p> comment email: {comment.email}</p>
            <p><b>"{comment.body}"</b></p>
        </div>
    );
};

export default CommentComponent;