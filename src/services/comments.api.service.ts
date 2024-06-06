import axios, {AxiosResponse} from "axios";

import {IComment} from "../interfaces/IComment";

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {"Content-type": "application/json; charset=UTF-8"}
});

export const commentsApiService = {
    getAllComments: (): Promise<AxiosResponse<IComment[]>> => {
        return axiosInstance.get("comments");
    },
    getCommentsByPostId: (id: string)=> {
        return axiosInstance.get(`/posts/${id}/comments`)
    }
}