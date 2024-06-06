import React, {useContext} from 'react';

import {SomeContext} from "../../context/ContextProvider";
import PostComponent from "../PostComponent/PostComponent";

const PostsComponent = () => {
    const {postStore:{allPosts}} = useContext(SomeContext);

    return (
        <div>
            {allPosts.map(post => <PostComponent post={post} key={post.id}/>)}
        </div>
    );
};

export default PostsComponent;