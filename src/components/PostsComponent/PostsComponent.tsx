import React, {FC} from 'react';

import PostComponent from "../PostComponent/PostComponent";
import {storeX} from "../../context/ContextProvider";

const PostsComponent: FC = () => {
    const {postsStore: {allPosts}} = storeX();

    return (
        <div>
            {allPosts.map(post => <PostComponent post={post} key={post.id}/>)}
        </div>
    );
};

export default PostsComponent;