import axios from "axios";

import {IAuthData} from "../interfaces/IAuthData";
import {ITokenObtainPair} from "../interfaces/ITokenObtainPair";

let axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v2",
    headers: {}
})

export const authService = {
    authentication: async (authData: IAuthData): Promise<boolean> => {
        let response;
        try {
            response = await axiosInstance.post<ITokenObtainPair>("/auth", authData);
            localStorage.setItem("tokenPair", JSON.stringify(response.data));

        } catch (error) {
            console.log(error)
        }

        return !!(response?.data?.access && response?.data?.refresh)
    },

    refresh: async (refreshToken: string) => {
        const response = await axiosInstance.post<ITokenObtainPair>("auth/refresh", {refresh: refreshToken})
        localStorage.setItem("tokenPair", JSON.stringify(response.data));
    }
}