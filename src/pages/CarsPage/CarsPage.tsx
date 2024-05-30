import React, {useEffect, useState} from 'react';

import CarsComponent from "../../components/CarsComponent/CarsComponent";
import {carService} from "../../services/carService";
import {ICarWithAuth} from "../../interfaces/ICarWithAuth";
import styles from "../CarsPage/CarPage.module.css"

const CarsPage = () => {
    const [cars, setCars] = useState<ICarWithAuth[]>([]);

    useEffect(() => {
        carService.getAllCars().then(value => {
                if (value) {
                    setCars(value.items);
                }
            }
        )
    }, []);

    return (
        <div className={styles.common}>
            <CarsComponent items={cars}/>
        </div>
    );
};

export default CarsPage;