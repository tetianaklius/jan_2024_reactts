import axios from "axios";


import {retriveLocalStorageData} from "../helpers/helpers";
import {ITokenObtainPair} from "../interfaces/ITokenObtainPair";
import {ICarsPaginated} from "../interfaces/ICarsPaginated";

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
    getAllCars: async (page: string = "1"): Promise<ICarsPaginated | undefined> => {
        const axiosResp = await axiosInstance.get<ICarsPaginated>("/cars", {params: {page: page}});
        return axiosResp.data;
    }
}