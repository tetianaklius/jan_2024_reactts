import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IPost} from "../../models/IPost";
import {postService} from "../../services/posts.api.service";


type PostsSliceType = {
    posts: IPost[],
    post: IPost | null,
    isLoaded: boolean
}

const postsInitState: PostsSliceType = {
    posts: [],
    post: null,
    isLoaded: false
}

const loadPosts = createAsyncThunk(
    "postsSlice/loadPosts",
    async (_, thunkAPI) => {
        try {
            const posts = await postService.getAll();
            thunkAPI.dispatch(postsActions.changeLoadStatus(true));
            return thunkAPI.fulfillWithValue(posts);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
)

const loadPostById = createAsyncThunk(
    "postsSlice/loadPostById",
    async (id: string, thunkAPI) => {
            try {
                const post = await postService.getById(id)
                return thunkAPI.fulfillWithValue(post)
            } catch (e) {
                const error = e as AxiosError
                return thunkAPI.rejectWithValue(error.response?.data)
            }
    }
)

export const postsSlice = createSlice({
        name: "postsSlice",
        initialState: postsInitState,
        reducers: {
            changeLoadStatus: (state, action: PayloadAction<boolean>) => {
                state.isLoaded = action.payload;
            },
        },
        extraReducers: builder => {
            builder
                .addCase(loadPosts.fulfilled, (state, action) => {
                    state.posts = action.payload;
                })
                .addCase(loadPosts.rejected, (state, action) => {
                })
                .addCase(loadPostById.fulfilled, (state, action) => {
                    state.post = action.payload;
                })
                .addCase(loadPostById.rejected, (state, action) => {
                })
        }
    }
)


export const postsActions = {
    ...postsSlice.actions,
    loadPosts,
    loadPostById
}