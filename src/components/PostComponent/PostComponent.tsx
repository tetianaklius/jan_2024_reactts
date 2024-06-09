import React, {FC, useContext} from 'react';

import {IPost} from "../../interfaces/IPost";
import {SomeContext} from "../../context/ContextProvider";

interface IProps {
    post: IPost
}

const PostComponent: FC<IProps> = ({post}) => {
    const {postStore: {setChosenPost}} = useContext(SomeContext);

    return (
        <div>
            {post.id}. {post.title}
            <button onClick={() => setChosenPost(post)}>choose post</button>
        </div>
    );
};

export default PostComponent;