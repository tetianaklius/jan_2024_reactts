import React, {useEffect} from 'react';

import PostsComponent from "../../components/PostsComponent/PostsComponent";
import {useAppDispatch} from "../../redux/store/store";
import {postsActions} from "../../redux/slices/postsSlice";

const PostsPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postsActions.loadPosts());
    })
    return (
        <div>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;