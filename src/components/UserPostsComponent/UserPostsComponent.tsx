import React, {useContext, useEffect, useMemo, useState} from 'react';

import {SomeContext} from "../../context/ContextProvider";
import {UserWithPostsType} from "../../interfaces/UserWithPostsType";

const UserPostsComponent = () => {
    const {postStore: {allPosts}, userStore: {allUsers}} = useContext(SomeContext);
    const [usersWithPostsState, setUsersWithPostsState] = useState<UserWithPostsType[]>([])

    const userWithPostsArray = useMemo(() => {
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
                <div>{user.name}</div>
                <ul>
                    {
                        user.posts.map(post => <li key={post.id}>{post.id}. {post.title}</li>)
                    }
                </ul>
            </div>)}
        </div>
    );
};

export default UserPostsComponent;