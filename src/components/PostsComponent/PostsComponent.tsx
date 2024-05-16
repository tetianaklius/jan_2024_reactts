import React, {useEffect, useState} from 'react';
import {IPost} from "../../interfaces/IPost";
import {services} from "../../services/api.service";
import PostComponent from "../PostComponent/PostComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        services.postApiService.getAllPosts().then(v => setPosts(v.data));
    }, [posts])


    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} id={post.id} userId={post.userId} body={post.body}
                                              title={post.title}/>)}
        </div>
    );
};

export default PostsComponent;