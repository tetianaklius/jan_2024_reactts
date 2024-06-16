import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../redux/store/store";
import {postsActions} from "../../redux/slices/postsSlice";
import styles from "../PostPage/PostPage.module.css";

const PostPage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {post} = useAppSelector(state => state.postsSlice);

    useEffect(() => {
        if (id) {
            dispatch(postsActions.loadPostById(id))
        }
    }, [id]);

    return (
        <div className={styles.main}>
            <div className={styles.post_box}>
                {
                    post &&
                    <div>
                        <p><b>post {post.id}</b></p>
                        <p>title: {post.title}</p>
                        <p>user id: {post.userId}</p>
                        <p>"{post.body}"</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default PostPage;