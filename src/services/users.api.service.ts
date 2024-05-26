import axios, {AxiosResponse} from "axios";

import {IUser} from "../interfaces/IUser";

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {"Content-type": "application/json; charset=UTF-8"}
});

export const userApiService = {
    getAllUsers: (): Promise<AxiosResponse<IUser[]>> => {
        return axiosInstance.get("users");
    }
}
