import React, {useEffect, useState} from 'react';

import {IComment} from "../../interfaces/IComment";
import CommentComponent from "../CommentComponent/CommentComponent";
import {commentsApiService} from "../../services/comments.api.service";

const CommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        commentsApiService.getAllComments().then(v => setComments(v.data));
    }, [])

    return (
        <div>
            {comments.map(comment => <CommentComponent key={comment.id} id={comment.id} postId={comment.postId}
                                                       body={comment.body}
                                                       email={comment.email} name={comment.name}/>)}
        </div>
    );
};

export default CommentsComponent;