import React, {useEffect, useState} from 'react';

import AllPostsComponent from "../../components/AllPostsComponent/AllPostsComponent";
import CommentsOfOnePostComponent from "../../components/CommentsOfOnePostComponent/CommentsOfOnePostComponent";
import {IPost} from "../../interfaces/IPost";
import {postsApiService} from "../../services/posts.api.service";
import styles from "../PostsPage/PostPage.module.css"

const PostsPage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        postsApiService.getAllPosts().then(v => setPosts(v.data));
    }, [])

    return (
        <div className={styles.common_container}>
            <div className={styles.posts_list}>
                <b>Posts</b>
                <AllPostsComponent posts={posts} button={"on"}/>
            </div>
            <div className={styles.comments_list}>
                <CommentsOfOnePostComponent/>
            </div>
        </div>
    );
};

export default PostsPage;