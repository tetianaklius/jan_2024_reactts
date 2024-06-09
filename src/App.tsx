import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import './App.css';
import {IUser} from "./interfaces/IUser";
import {IPost} from "./interfaces/IPost";
import {IComment} from "./interfaces/IComment";
import {HeaderComponent} from "./components/HeaderComponent/HeaderComponent";
import {SomeContext} from "./context/ContextProvider";
import {usersApiService} from "./services/users.api.service";
import {postsApiService} from "./services/posts.api.service";
import {commentsApiService} from "./services/comments.api.service";

const App = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);
    const [comments, setComments] = useState<IComment[]>([]);

    const [chosenUser, setChosenUser] = useState<IUser | null>(null);
    const [chosenPost, setChosenPost] = useState<IPost | null>(null);


    useEffect(() => {
        usersApiService.getAllUsers().then(v => setUsers(v.data));
        postsApiService.getAllPosts().then(v => setPosts(v.data));
        commentsApiService.getAllComments().then(v => setComments(v.data));
    }, [])

    const chosenUserLift = (obj: IUser) => {
        setChosenUser(obj)
    }

    const chosenPostLift = (obj: IPost) => {
        setChosenPost(obj);
    }

    return (
        <div>
            <HeaderComponent/>

            {chosenUser &&
                <div>chosen user:
                    <b> {chosenUser.name}</b> {chosenUser.email}
                    <hr/>
                </div>
            }
            {chosenPost &&
                <div>chosen post:
                    <b> {chosenPost.id}. {chosenPost.title}</b>
                    <hr/>
                </div>
            }

            <SomeContext.Provider value={{
                userStore: {
                    allUsers: users,
                    setChosenUser: (obj: IUser) => {
                        chosenUserLift(obj)
                    }
                },
                postStore: {
                    allPosts: posts,
                    setChosenPost: (obj: IPost) => {
                        chosenPostLift(obj)
                    }
                },
                commentsStore: {
                    allComments: comments
                }
            }
            }>
                <Outlet/>
            </SomeContext.Provider>
        </div>
    );
};

export default App;
