import React, {useContext, useEffect, useMemo, useState} from 'react';

import {SomeContext} from "../../context/ContextProvider";
import {PostWithCommentsType} from "../../interfaces/PostWithCommentsType";

export const PostCommentsComponent = () => {
    const {postStore: {allPosts}, commentsStore: {allComments}} = useContext(SomeContext);
    const [postsWithCommentsState, setPostsWithCommentsState] = useState<PostWithCommentsType[]>([])

    const postWithCommentsArray = useMemo(() => {
        return () => {
            return allPosts.map(post => {
                return {...post, comments: allComments.filter(comment => comment.postId === post.id)};
            })
        }
    }, [allPosts, allComments]);

    useEffect(() => {
        setPostsWithCommentsState(postWithCommentsArray);
    }, [postWithCommentsArray])

    return (
        <div>
            {postsWithCommentsState.map(post => <div key={post.id}>
                <div><b>{post.title}</b></div>
                <ul>
                    {
                        post.comments.map(comment => <li key={comment.id}>{comment.id}. {comment.name}</li>)
                    }
                </ul>
            </div>)}
        </div>
    );
};