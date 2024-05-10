import React, {FC} from 'react';
import {useStorage} from "../hooks/useStorage";

const StorageComponent: FC = () => {
    let someData = {name: "Hanna", age: 35}
    useStorage("user", localStorage, someData);

    let valueToShow = localStorage.getItem("user");
    if (valueToShow !== null) {
        valueToShow = JSON.parse(valueToShow);
    }

    return (
        <div>
            /////
            <br/>
            name: {valueToShow.name}
            <br/>
            age: {valueToShow.age}
        </div>
    );
};

export default StorageComponent;