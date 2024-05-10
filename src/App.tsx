import React from 'react';
import './App.css';
import {ToggleComponent} from "./components/ToggleComponent";
import StorageComponent from "./components/StorageComponent";

const App = () => {
    return (
        <div>
            <ToggleComponent/>
            <StorageComponent/>
        </div>
    );
};

export default App;
