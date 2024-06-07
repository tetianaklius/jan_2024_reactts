import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";

import './App.css';
import {HeaderComponent} from "./components/HeaderComponent/HeaderComponent";
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
        <div>
            <HeaderComponent/>
            <hr/>
            {chosenUser && <div>chosen user: <b>{chosenUser.name}</b> {chosenUser.email}</div>}
            <hr/>
            {chosenPost && <div> chosen post: {chosenPost.id} <b>{chosenPost.title}</b></div>}
            <hr/>
            <Outlet/>
        </div>
    );
};

export default App;
