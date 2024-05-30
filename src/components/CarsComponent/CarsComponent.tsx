import React, {FC} from 'react';

import CarComponent from "../CarComponent/CarComponent";
import {ICarsPaginated} from "../../interfaces/ICarsPaginated";
import styles from "../CarsComponent/CarsComponent.module.css";

const CarsComponent: FC<ICarsPaginated> = ({items}) => {
    return (
        <div className={styles.cars_box}>
            {items.map(car => <CarComponent key={car.id} id={car.id} brand={car.brand} year={car.year}
                                            price={car.price}/>)}

        </div>
    );
};

export default CarsComponent;