import React from 'react';
import {IPost, IPosts} from "../interfaces/interfaces";
import PostComponent from "./PostComponent";

const PostsComponent = ({posts}: IPosts) => {
    return (
        <div>
            {
                posts?.map(
                    (post: IPost) =>
                        <PostComponent key={post.id} id={post.id} userId={post.userId}
                                       title={post.title} body={post.body}/>
                )
            }
        </div>)
}
export default PostsComponent;