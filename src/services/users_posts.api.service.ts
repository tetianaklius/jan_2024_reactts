import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/UserModel";
import {IPostModel} from "../models/PostModel";

interface AxiosIUserModel {
    users: IUserModel[],
    limit: number,
    skip: number,
    total: number
}

interface AxiosIPostModel {
    limit: number,
    posts: IPostModel[],
    skip: number,
    total: number
}

let axiosInstance = axios.create(
    {
        baseURL: "https://dummyjson.com",
        headers: {"content-type": "application/json; charset=UTF-8"}
    }
)

export const getAllUsers = (): Promise<AxiosResponse<AxiosIUserModel>> => {
    return axiosInstance.get("/users");
}

export const showAllPostsByUserId = (UserId: number): Promise<AxiosResponse<AxiosIPostModel>> => {
    return axiosInstance.get(`/users/${UserId}/posts`);
}

