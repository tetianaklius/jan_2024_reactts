import axios from "axios";

import {IAuthData} from "../interfaces/IAuthData";
import {ITokenObtainPair} from "../interfaces/ITokenObtainPair";
import {retriveLocalStorageData} from "../helpers/helpers";

let axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v2",
    headers: {}
})

export const authService = {
    authentication: async (authData: IAuthData): Promise<boolean> => {
        const response = await axiosInstance.post<ITokenObtainPair>("/auth", authData);
        localStorage.setItem("tokenPair", JSON.stringify(response.data));
        return !!(response?.data?.access && response?.data?.refresh)
    },

    refresh: async () => {
        const refreshToken = retriveLocalStorageData<ITokenObtainPair>("tokenPair").refresh;
        const response = await axiosInstance.post<ITokenObtainPair>("auth/refresh", {refresh: refreshToken})
        localStorage.setItem("tokenPair", JSON.stringify(response.data));
    }
}