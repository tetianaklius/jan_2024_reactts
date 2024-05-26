import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {IComment} from "../../interfaces/IComment";
import {commentsApiService} from "../../services/comments.api.service";
import CommentComponent from "../CommentComponent/CommentComponent";
import styles from "./CommentsOfOnePostComponent.module.css"

const CommentsOfOnePostComponent = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        if (id) {
            commentsApiService.getCommentsByPostId(id).then(v => setComments(v.data));
        }
    }, [id])

    return (
        <div className={styles.comments_list}>
            {comments.map(comment => <CommentComponent key={comment.id} postId={comment.postId} body={comment.body}
                                                                        id={comment.id} name={comment.name} email={comment.email}/>)}

        </div>
    );
};

export default CommentsOfOnePostComponent;