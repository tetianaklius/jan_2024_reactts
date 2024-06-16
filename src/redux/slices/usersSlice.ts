import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {userService} from "../../services/users.api.service";
import {IUser} from "../../models/IUser";


type UsersSliceType = {
    users: IUser[],
    user: IUser | null,
    isLoaded: boolean
}

const usersInitState: UsersSliceType = {
    users: [],
    user: null,
    isLoaded: false
}

const loadUsers = createAsyncThunk(
    "usersSlice/loadUsers",
    async (_, thunkAPI) => {
        try {
            const users = await userService.getAll();
            thunkAPI.dispatch(userActions.changeLoadStatus(true));
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const loadUserById = createAsyncThunk(
    "usersSlice/loadUserById",
    async (id: string, thunkAPI) => {
        try {
            const user = await userService.getById(id)
            return thunkAPI.fulfillWithValue(user)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

export const usersSlice = createSlice({
    name: "usersSlice",
    initialState: usersInitState,
    reducers: {
        changeLoadStatus: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                //////
            })
            .addCase(loadUserById.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(loadUserById.rejected, (state, action) => {
                //////
            })
    }
});

export const userActions = {
    ...usersSlice.actions,
    loadUsers,
    loadUserById
}