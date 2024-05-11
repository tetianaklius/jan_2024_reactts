import React, {FC} from 'react';
import {useStorage} from "../hooks/useStorage";


const StorageComponent: FC = () => {
    let someData = {name: "Hanna", age: 35}
    useStorage("user", localStorage, someData);

    let value = localStorage.getItem("user");
    let valueToShow;
    if (value !== null) {
        valueToShow = JSON.parse(value);
    }

    return (
        <div>
            name: {valueToShow.name}
            <br/>
            age: {valueToShow.age}
        </div>
    );
};

export default StorageComponent;