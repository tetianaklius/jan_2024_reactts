import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";

import styles from "../src/App.module.css";
import moreStyles from "../src/components/CommentComponent/CommentComponent.module.css";
import {HeaderComponent} from "./components/HeaderComponent/HeaderComponent";
import {FooterComponent} from "./components/Footer/FooterComponent";
import {storeX} from "./context/ContextProvider";
import {usersApiService} from "./services/users.api.service";
import {postsApiService} from "./services/posts.api.service";
import {commentsApiService} from "./services/comments.api.service";


const App = () => {
    const {
        usersStore,
        usersStore: {chosenUser},
        postsStore,
        postsStore: {chosenPost},
        commentsStore,
        commentsStore: {chosenComments, removeCommentFromChosen}
    } = storeX();

    useEffect(() => {
        usersApiService.getAllUsers().then(v => {
            usersStore.setAllUsers(v.data)
        });
        postsApiService.getAllPosts().then(v => {
            postsStore.setAllPosts(v.data)
        });
        commentsApiService.getAllComments().then(v => {
            commentsStore.setAllComments(v.data)
        });
    }, [])

    return (
        <div className={styles.main}>
            <HeaderComponent/>
            <div className={styles.chosen_items}>
                <hr/>
                {chosenUser && <div>chosen user: <b>{chosenUser.name}</b> {chosenUser.email}</div>}
                <hr/>
                {chosenPost && <div> chosen post: {chosenPost.id} <b>{chosenPost.title}</b></div>}
                <hr/>
                {chosenComments.length > 0 &&
                    <div> chosen comments: <br/>
                        {Array.isArray(chosenComments) && chosenComments.map(comment =>
                            <div>
                                <b>comment {comment.id}</b> to post {comment.postId} (by {comment.email}):
                                <br/>"{comment.body}"
                                <button
                                    onClick={() => {
                                        removeCommentFromChosen(comment);
                                    }
                                    } className={moreStyles.choose_button}>remove from chosen
                                </button>
                            </div>)}
                    </div>}
                <hr/>
            </div>
            <div className={styles.outlet}>
                <Outlet/>
            </div>
            <FooterComponent/>
        </div>
    );
};

export default App;
