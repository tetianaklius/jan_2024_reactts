import React, {useState} from 'react';
import './App.css';
import {getUserPostsByUserId} from "./services/users_posts.api.service";
import Users from "./components/Users";
import {IPostModel} from "./models/PostModel";
import Posts from "./components/Posts";


const App = () => {
    const [posts, setPosts] = useState<IPostModel[]>([]);

    const lift = (userId: number) => {
        getUserPostsByUserId(userId).then(({data}) => {
            setPosts(data.posts);
        })
    }
    return (
        <div className="App">
            <div className={"users"}><Users lift={lift}/></div>
            <div className={"posts"}>
                <Posts posts={posts}/>
            </div>

        </div>
    );
};

export default App;
