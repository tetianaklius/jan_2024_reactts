import React, {FC} from 'react';

import PostComponent from "../PostComponent/PostComponent";
import {IPosts} from "../../interfaces/IPosts";
import styles from "../AllPostsComponent/AllPostsComponent.module.css"

const AllPostsComponent: FC<IPosts> = ({posts, button}: IPosts) => {

    return (
        <div className={styles.posts_list}>
            {posts.map(post => <PostComponent key={post.id} id={post.id} userId={post.userId} body={post.body}
                                              title={post.title} button={button}/>)}
        </div>
    );
};

export default AllPostsComponent;