import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterStateType = {
    value: number
}

const initialState: CounterStateType = {
    value: 0
}

export const counterSlice1 = createSlice({
    name: "counter1",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        add: (state, action: PayloadAction<number>) => {
            state.value = state.value + action.payload;
        },
        subtract: (state, action: PayloadAction<number>) => {
            state.value = state.value - action.payload;
        },
        reset: (state) => {
            state.value = initialState.value;
        }
    }
});

export const {increment, decrement, add, subtract, reset} = counterSlice1.actions;
