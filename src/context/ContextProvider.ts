import {createContext} from "react";

import {IUser} from "../interfaces/IUser";
import {IPost} from "../interfaces/IPost";
import {IComment} from "../interfaces/IComment";

type StoreType = {
    userStore: {
        allUsers: IUser[],
        setChosenUser: (obj: IUser) => void
    },
    postStore: {
        allPosts: IPost[],
        setChosenPost: (obj: IPost) => void
    },
    commentsStore: {
        allComments: IComment[]
    }
}

const defaultValue: StoreType = {
    userStore: {
        allUsers: [],
        setChosenUser: () => {
        }
    },
    postStore: {
        allPosts: [],
        setChosenPost: () => {
        }
    },
    commentsStore: {
        allComments: []
    }
}

export const SomeContext = createContext<StoreType>(defaultValue)