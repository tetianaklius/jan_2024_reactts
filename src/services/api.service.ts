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
    },
    postApiService: {
        getAllPosts: (): Promise<AxiosResponse<IPost[]>> => {
            return axiosInstance.get("posts");
        },
    },
    commentApiService: {
        getAllComments: (): Promise<AxiosResponse<IComment[]>> => {
            return axiosInstance.get("comments");
        },
    },

}