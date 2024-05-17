import React from 'react';
import {IComment} from "../../interfaces/IComment";

const CommentComponent = (comment: IComment) => {
    return (
        <div>
            <p>id: {comment.id}</p>
            <p>post id: {comment.postId}</p>
            <p>name: {comment.name}</p>
            <p>email: {comment.email}</p>
            <p>body: {comment.body}</p>
            <hr/>
        </div>
    );
};

export default CommentComponent;