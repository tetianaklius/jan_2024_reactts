import React from 'react';
import {IPost} from "../interfaces/interfaces";

const PostComponent = ({id, title, userId, body}: IPost) => {
    return (
        <div>
            <hr/>
            <p>userId: {userId}</p>
            <p>postId: {id}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export default PostComponent;