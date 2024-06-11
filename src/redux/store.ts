import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

import {counterSlice1} from "./slices/slice1";


export const store = configureStore({
    reducer: {
        slice1: counterSlice1.reducer
    }
});

export type AllTypesOfStore = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<AllTypesOfStore>();

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();