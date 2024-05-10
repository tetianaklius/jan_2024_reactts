import React from 'react';
import './App.css';
import {ToggleComponent} from "./components/ToggleComponent";
import StorageComponent from "./components/StorageComponent";
import PreviousComponent from "./components/PreviousComponent";

const App = () => {
    return (
        <div>
            <ToggleComponent/>
            <hr/>
            <PreviousComponent/>
            <hr/>
            <StorageComponent/>
        </div>
    );
};

export default App;
