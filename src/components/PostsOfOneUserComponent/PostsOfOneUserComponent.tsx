import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {IPost} from "../../interfaces/IPost";
import AllPostsComponent from "../AllPostsComponent/AllPostsComponent";
import {postsApiService} from "../../services/posts.api.service";


const PostsOfOneUserComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    let {id} = useParams();

    useEffect(() => {
        if (id) {
            postsApiService.getPostsByUserId(id).then(v => setPosts(v.data));
        }
    }, [id])

    return (
        <div>
            <AllPostsComponent posts={posts} button={"off"}/>
        </div>
    );
};

export default PostsOfOneUserComponent;