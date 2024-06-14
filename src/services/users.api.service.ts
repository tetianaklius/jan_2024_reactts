import axios from "axios";

import {baseUrl, urls} from "../constants/urls";
import {IUser} from "../models/IUser";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
});

export const userService = {
    getAll: async (): Promise<IUser[]> => {
        const response = await axiosInstance.get<IUser[]>(urls.users.base);
        return response.data;
    },
    getById: async (id: string): Promise<IUser> => {
        const response = await axiosInstance.get<IUser>(urls.users.byId(+id));
        return response.data;
    }
}