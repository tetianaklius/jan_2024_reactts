import React, {FC} from 'react';
import Post from "./Post";
import {IPostModel} from "../models/PostModel";

interface IProps {
    posts: IPostModel[];
}

const Posts: FC<IProps> = ({posts}) => {

    return (
        <div>
            {posts.map((post: IPostModel) => <Post key={post.id} title={post.title} body={post.body} id={post.id}/>)}
        </div>
    );
};

export default Posts;