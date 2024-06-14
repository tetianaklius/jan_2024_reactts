import React from 'react';

import {useAppSelector} from "../../redux/store/store";
import PostComponent from "../PostComponent/PostComponent";
import styles from "./PostsComponent.module.css"

const PostsComponent = () => {
    const {posts, isLoaded} = useAppSelector(state => state.postsSlice)
    return (
        <div className={styles.main}>
            <div className={styles.posts_box}>
                {isLoaded ? posts.map(post => <PostComponent key={post.id} post={post}/>) : <h3>Loading...</h3>}
            </div>
        </div>
    );
};

export default PostsComponent;