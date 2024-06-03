import React, {FC} from 'react';

import CarComponent from "../CarComponent/CarComponent";
import styles from "../CarsComponent/CarsComponent.module.css";
import {ICarWithAuth} from "../../interfaces/ICarWithAuth";

interface IProps {
    cars: ICarWithAuth[]
}

const CarsComponent: FC<IProps> = ({cars}) => {
    return (
        <div className={styles.cars_box}>
            {cars.map(car => <CarComponent key={car.id} id={car.id} brand={car.brand} year={car.year}
                                            price={car.price}/>)}

        </div>
    );
};

export default CarsComponent;