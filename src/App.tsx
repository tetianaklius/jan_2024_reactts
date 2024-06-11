import React from 'react';
import './App.css';

import {useAppDispatch, useAppSelector} from "./redux/store";
import {add, decrement, increment, subtract, reset} from "./redux/slices/slice1";

const App = () => {

    const slice1 = useAppSelector((state) => state.slice1)
    const dispatch = useAppDispatch();

    return (
        <div className={"main"}>
            <h2>{slice1.value}</h2>
            <div className={"button_box"}>
                <div>
                    <button
                        onClick={() => {
                            dispatch(increment())
                        }}>increment
                    </button>

                    <button
                        onClick={() => {
                            dispatch(decrement())
                        }}>decrement
                    </button>

                    <button
                        onClick={() => {
                            dispatch(add(100))
                        }}>+ 100
                    </button>

                    <button
                        onClick={() => {
                            dispatch(subtract(200))
                        }}>- 200
                    </button>
                </div>
                <div>
                    <button
                        className={"reset_button"}
                        onClick={() => {
                            dispatch(reset())
                        }}>reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
