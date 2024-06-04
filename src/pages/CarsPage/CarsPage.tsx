import React, {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import {AxiosError} from "axios";

import CarsComponent from "../../components/CarsComponent/CarsComponent";
import {carService} from "../../services/carService";
import styles from "../CarsPage/CarPage.module.css"
import {ICarsPaginated} from "../../interfaces/ICarsPaginated";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import {authService} from "../../services/authService";


const CarsPage = () => {
    const navigate = useNavigate();

    const [query, setQuery] = useSearchParams()
    const [carsPaginatedObj, setCarsPaginatedObj] = useState<ICarsPaginated>({
        items: [],
        next: null,
        prev: null,
        total_pages: 0,
        total_items: 0
    });

    useEffect(() => {

        const getCarsData = async () => {

            try {
                const response = await carService.getAllCars(query.get("page") || "1");
                if (response) {
                    setCarsPaginatedObj(response)
                }
            } catch (error) {
                const axiosError = error as AxiosError;
                if (axiosError && axiosError?.response?.status === 401) {
                    try {
                        await authService.refresh();
                    } catch (e) {
                        return navigate("/");
                    }

                    const response = await carService.getAllCars(query.get("page") || "1")
                    if (response) {
                        setCarsPaginatedObj(response);
                    }
                }
            }

        }
        getCarsData();
        console.log("needed some changes in file")
    }, [query]);

    return (
        <div className={styles.common}>
            <PaginationComponent prev={carsPaginatedObj.prev} next={carsPaginatedObj.next}/>
            <CarsComponent cars={carsPaginatedObj.items}/>
            <PaginationComponent prev={carsPaginatedObj.prev} next={carsPaginatedObj.next}/>
        </div>
    );
};

export default CarsPage;