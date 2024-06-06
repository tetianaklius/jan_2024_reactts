import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import './App.css';
import {HeaderComponent} from "./components/HeaderComponent/HeaderComponent";
import {usersApiService} from "./services/users.api.service";
import {postsApiService} from "./services/posts.api.service";
import {SomeContext} from "./context/ContextProvider";
import {IUser} from "./interfaces/IUser";
import {IPost} from "./interfaces/IPost";

const App = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);


    useEffect(() => {
        usersApiService.getAllUsers().then(v => setUsers(v.data))
        postsApiService.getAllPosts().then(v => setPosts(v.data))
    }, [])

    return (
        <div>
            <HeaderComponent/>

            <SomeContext.Provider value={{
                    userStore: {
                        allUsers: users
                    },
                    postStore: {
                        allPosts: posts
                    }}
            }>
                <Outlet/>
            </SomeContext.Provider>

        </div>
    );
};

export default App;
