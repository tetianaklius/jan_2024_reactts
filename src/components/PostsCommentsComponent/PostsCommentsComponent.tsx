import React, {FC, useEffect, useMemo, useState} from 'react';

import {storeX} from "../../context/ContextProvider";
import {PostWithCommentsType} from "../../interfaces/PostWithCommentsType";

const PostsCommentsComponent: FC = () => {
    const {postsStore: {allPosts}, commentsStore: {allComments}} = storeX();
    const [postsWithCommentsState, setPostsWithCommentsState] = useState<PostWithCommentsType[]>([]);

    const postsWithCommentsArray = useMemo(() => {
        return () => {
            return allPosts.map(post => {
                return {...post, comments: allComments.filter(comment => comment.postId === post.id)};
            })
        }
    }, [allPosts, allComments]);

    useEffect(() => {
        setPostsWithCommentsState(postsWithCommentsArray)
    }, [postsWithCommentsArray])

    return (
        <div>

            {postsWithCommentsState.map(post => <div key={post.id}>
                <div><b>{post.id}. {post.title}</b></div>
                <ul>
                    {
                        post.comments.map(comment => <li
                            key={comment.id}>{comment.id}. {comment.name} <i>({comment.email})</i></li>)
                    }
                </ul>
            </div>)}
        </div>
    );
};

export default PostsCommentsComponent;