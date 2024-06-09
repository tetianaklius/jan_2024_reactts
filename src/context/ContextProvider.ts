import {create} from "zustand";

import {IUser} from "../interfaces/IUser";
import {IPost} from "../interfaces/IPost";
import {IComment} from "../interfaces/IComment";

type StoreType = {
    usersStore: {
        allUsers: IUser[],
        setAllUsers: (users: IUser[]) => void,
        chosenUser: IUser | null,
        setChosenUser: (obj: IUser) => void
    },
    postsStore: {
        allPosts: IPost[],
        setAllPosts: (posts: IPost[]) => void,
        chosenPost: IPost | null,
        setChosenPost: (obj: IPost) => void,
    },
    commentsStore: {
        allComments: IComment[],
        setAllComments: (comments: IComment[]) => void,
        chosenComments: IComment[] | [],
        setChosenComments: (commentToArray: IComment) => void,
        removeCommentFromChosen: (comment: IComment) => void
    }

}

export const storeX = create<StoreType>()((set) => {
    return {
        usersStore: {
            allUsers: [],
            setAllUsers: (users: IUser[]) => {
                return set((state: StoreType) => {
                    return {
                        ...state,
                        usersStore: {
                            ...state.usersStore,
                            allUsers: users
                        }
                    }
                })
            },
            chosenUser: null,
            setChosenUser: (user: IUser) => {
                return set((state: StoreType) => {
                    return {
                        ...state,
                        usersStore: {
                            ...state.usersStore,
                            chosenUser: user
                        }
                    }
                })
            }
        },
        postsStore: {
            allPosts: [],
            setAllPosts: (posts: IPost[]) => {
                return set((state: StoreType) => {
                    return {
                        ...state,
                        postsStore: {
                            ...state.postsStore,
                            allPosts: posts
                        }
                    }
                })
            },
            chosenPost: null,
            setChosenPost: (post: IPost) => {
                return set((state: StoreType) => {
                    return {
                        ...state,
                        postsStore: {
                            ...state.postsStore,
                            chosenPost: post
                        }
                    }
                })
            }

        },
        commentsStore: {
            allComments: [],
            setAllComments: (comments: IComment[]) => {
                return set((state: StoreType) => {
                    return {
                        ...state,
                        commentsStore: {
                            ...state.commentsStore,
                            allComments: comments
                        }
                    }
                })
            },
            chosenComments: [],
            setChosenComments: (chComment: IComment) => {
                return set((state: StoreType) => {
                    let arr: IComment[] = state.commentsStore.chosenComments;
                    if (Array.isArray(arr)) {
                        if (!arr.includes(chComment)) {
                            arr.push(chComment)
                        }
                    }
                    return {
                        ...state,
                        commentsStore: {
                            ...state.commentsStore,
                            chosenComments: arr
                        }
                    }
                })
            },
            removeCommentFromChosen: (comment: IComment) => {
                return set((state: StoreType) => {
                    let arr: IComment[] = state.commentsStore.chosenComments;
                    if (arr.includes(comment)) {
                        const index = arr.indexOf(comment);
                        arr.splice(index, 1);
                    }
                    console.log(arr)
                    return {
                        ...state,
                        commentsStore: {
                            ...state.commentsStore,
                            chosenComments: arr
                        }
                    }
                });
            }
        }
    }
})