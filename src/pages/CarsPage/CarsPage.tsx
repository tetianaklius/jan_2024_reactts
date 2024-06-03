import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import CarsComponent from "../../components/CarsComponent/CarsComponent";
import {carService} from "../../services/carService";
import styles from "../CarsPage/CarPage.module.css"
import {ICarsPaginated} from "../../interfaces/ICarsPaginated";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";


const CarsPage = () => {
    const [query, setQuery] = useSearchParams({page: "1"})

    const [carsPaginatedObj, setCarsPaginatedObj] = useState<ICarsPaginated>({
        items: [],
        next: null,
        prev: null,
        total_pages: 0,
        total_items: 0
    });

    useEffect(() => {
        carService.getAllCars(query.get("page") || "1").then(value => {
                if (value) {
                    setCarsPaginatedObj(value);
                }
            }
        )
    }, [query]);

    const changePage = (action: string) => {
        switch (action) {
            case "prev":
                setQuery({...carsPaginatedObj.prev})
                break;
            case "next":
                setQuery({...carsPaginatedObj.next})
                break;
        }
    }

    return (
        <div className={styles.common}>
            <PaginationComponent changePage={changePage} prev={carsPaginatedObj.prev} next={carsPaginatedObj.next}/>
            <CarsComponent cars={carsPaginatedObj.items}/>
            <PaginationComponent changePage={changePage} prev={carsPaginatedObj.prev} next={carsPaginatedObj.next}/>
        </div>
    );
};

export default CarsPage;