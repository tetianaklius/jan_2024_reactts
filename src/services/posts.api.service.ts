import axios from "axios";

import {baseUrl, urls} from "../constants/urls";
import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
});

export const postService = {
    getAll: async (): Promise<IPost[]> => {
        const response = await axiosInstance.get<IPost[]>(urls.posts.base);
        return response.data;
    },
    getById: async (id: string): Promise<IPost> => {
        const response = await axiosInstance.get<IPost>(urls.posts.byId(+id));
        return response.data;
    }
}