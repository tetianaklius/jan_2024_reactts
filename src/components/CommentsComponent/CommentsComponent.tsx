import React, {useEffect, useState} from 'react';
import {IComment} from "../../interfaces/IComment";
import {services} from "../../services/api.service";
import CommentComponent from "../CommentComponent/CommentComponent";

const CommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        services.commentApiService.getAllComments().then(v => setComments(v.data));
    }, [comments])

    return (
        <div>
            {comments.map(comment => <CommentComponent key={comment.id} id={comment.id} postId={comment.postId}
                                                       body={comment.body}
                                                       email={comment.email} name={comment.name}/>)}
        </div>
    );
};

export default CommentsComponent;