import axios, {AxiosResponse} from "axios";
import {IPost} from "../interfaces/interfaces";

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {"Content-type": "application/json; charset=UTF-8"},

})

export const postPost = (formObject: IPost): Promise<AxiosResponse<IPost>> => {
    return axiosInstance.post(
        "/posts",
        JSON.stringify({
            title: formObject.title,
            body: formObject.body,
            userId: formObject.userId,
        })
    )
}

export const getAllPosts = (): Promise<AxiosResponse<IPost[]>> => {
    return axiosInstance.get("/posts");
}