import React, {FC} from 'react';

import {ICarWithAuth} from "../../interfaces/ICarWithAuth";
import styles from "../CarComponent/CarComponent.module.css";

const CarComponent: FC<ICarWithAuth> = ({id, price, year, brand}) => {
    return (
        <div className={styles.car_box}>
            <p><span>сar id:</span> {id}</p>
            <p><span>brand:</span> {brand}</p>
            <p><span>year:</span> {year}</p>
            <p><span>price:</span> {price}</p>
        </div>
    );
};

export default CarComponent;