import {createContext} from "react";

import {IUser} from "../interfaces/IUser";
import {IPost} from "../interfaces/IPost";

type StoreType = {
    userStore: {
        allUsers: IUser[],
        setChosenUser: (obj: IUser) => void
    },
    postStore: {
        allPosts: IPost[]
    }
}

const defaultValue: StoreType = {
    userStore: {
        allUsers: [],
        setChosenUser: () => {}
    },
    postStore: {
        allPosts: []
    }
}

export const SomeContext = createContext<StoreType>(defaultValue)