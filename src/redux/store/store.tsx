import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

import {usersSlice} from "../slices/usersSlice";
import {postsSlice} from "../slices/postsSlice";

export const store = configureStore({
    reducer: {
        usersSlice: usersSlice.reducer,
        postsSlice: postsSlice.reducer
    }
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();