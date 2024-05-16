import axios, {AxiosResponse} from "axios";
import {IUser} from "../interfaces/IUser";
import {IPost} from "../interfaces/IPost";
import {IComment} from "../interfaces/IComment";

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {"Content-type": "application/json; charset=UTF-8"}
});

export const services = {
    userApiService: {
        getAllUsers: (): Promise<AxiosResponse<IUser[]>> => {
            return axiosInstance.get("users");
        },
        someKey: {},
        someKey2: {}
    },
    postApiService: {
        getAllPosts: (): Promise<AxiosResponse<IPost[]>> => {
            return axiosInstance.get("posts");
        },
        // getPostsByUserId: (userId:number): Promise<AxiosResponse<IPost[]>> => {
        //     return axiosInstance.get(`users/${userId}/posts`);
        // },
        someKey2: {}
    },
    commentApiService: {
        getAllComments: (): Promise<AxiosResponse<IComment[]>> => {
            return axiosInstance.get("comments");
        },
        someKey: {},
        someKey2: {}
    },

}