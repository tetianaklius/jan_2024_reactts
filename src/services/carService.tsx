import axios, {AxiosError} from "axios";

import {retriveLocalStorageData} from "../helpers/helpers";
import {ITokenObtainPair} from "../interfaces/ITokenObtainPair";
import {ICarsPaginated} from "../interfaces/ICarsPaginated";
import {authService} from "./authService";

let axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v2",
    headers: {}
})

axiosInstance.interceptors.request.use(request => {
        if (localStorage.getItem("tokenPair") && (request.url !== "/auth" && request.url !== "/auth/refresh"))
            request.headers.set("Authorization", "Bearer " + retriveLocalStorageData<ITokenObtainPair>("tokenPair").access)

        return request;
    }
)

export const carService = {
    getAllCars: async () => {

        try {
            const axiosResp = await axiosInstance.get<ICarsPaginated>("/cars");
            return axiosResp.data;

        } catch (error) {
            const axiosError = error as AxiosError;
            if (axiosError?.response?.status === 401) {
                try {
                    const refreshToken = retriveLocalStorageData<ITokenObtainPair>("tokenPair").refresh;
                    await authService.refresh(refreshToken);
                    await carService.getAllCars();
                } catch (error) {
                    console.log(error)
                    document.body.innerHTML = `<a href="/" style="font-size: xx-large">Log in here please</a>`
                }
            }
        }
    }
}