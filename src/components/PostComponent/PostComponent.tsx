import React from 'react';
import {IPost} from "../../interfaces/IPost";

const PostComponent = (post: IPost) => {
    return (
        <div>
            <p>{post.id}. <span>{post.title}</span></p>
            <p>userId: {post.userId}</p>
            <p>{post.body}</p>
            <hr/>
        </div>
    );
};

export default PostComponent;