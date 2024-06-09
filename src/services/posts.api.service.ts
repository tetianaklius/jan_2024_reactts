import axios, {AxiosResponse} from "axios";

import {IPost} from "../interfaces/IPost";

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {"Content-type": "application/json; charset=UTF-8"}
});

export const postsApiService = {
    getAllPosts: (): Promise<AxiosResponse<IPost[]>> => {
        return axiosInstance.get("posts");
    }
}