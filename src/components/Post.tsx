import React, {FC} from 'react';
import {IPostModel} from "../models/PostModel";

const Post: FC<IPostModel> = (post) => {
    return (
        <div>
            <b>{post.id}. {post.title}</b>
            <div>{post.body}</div>
        </div>
    );
};

export default Post;