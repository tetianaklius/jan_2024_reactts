import React, {FC, useEffect, useMemo, useState} from 'react';

import {UserWithPostsType} from "../../interfaces/UserWithPostsType";
import {storeX} from "../../context/ContextProvider";

const UsersPostsComponent: FC = () => {
    const {postsStore: {allPosts}, usersStore: {allUsers}} = storeX();
    const [usersWithPostsState, setUsersWithPostsState] = useState<UserWithPostsType[]>([])

    const userWithPostsArray = useMemo<() => UserWithPostsType[]>(() => {
        return () => {
            return allUsers.map(user => {
                return {...user, posts: allPosts.filter(post => post.userId === user.id)};
            })
        }
    }, [allPosts, allUsers]);

    useEffect(() => {
        setUsersWithPostsState(userWithPostsArray);
    }, [userWithPostsArray])

    return (
        <div>
            {usersWithPostsState.map(user => <div key={user.id}>
                <div><b>{user.name}</b></div>
                <ul>
                    {
                        user.posts.map(post => <li key={post.id}>{post.id}. {post.title}</li>)
                    }
                </ul>
            </div>)}
        </div>
    );
};

export default UsersPostsComponent;