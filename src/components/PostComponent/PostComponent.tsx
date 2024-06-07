import React, {FC} from 'react';

import {IPost} from "../../interfaces/IPost";
import {storeX} from "../../context/ContextProvider";

interface IProps {
    post: IPost
}

const PostComponent: FC<IProps> = ({post}) => {
    const {postsStore: {setChosenPost}} = storeX();

    return (
        <div>
            {post.id}. {post.title}
            <button onClick={() => setChosenPost(post)}>choose post</button>
        </div>
    );
};

export default PostComponent;