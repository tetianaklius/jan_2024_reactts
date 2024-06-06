import {createContext} from "react";

import {IUser} from "../interfaces/IUser";
import {IPost} from "../interfaces/IPost";

type StoreType = {
    userStore: {
        allUsers: IUser[]
    },
    postStore: {
        allPosts: IPost[]
    }
}

const defaultValue: StoreType = {
    userStore: {
        allUsers: []
    },
    postStore: {
        allPosts: []
    }
}

export const SomeContext = createContext<StoreType>(defaultValue)