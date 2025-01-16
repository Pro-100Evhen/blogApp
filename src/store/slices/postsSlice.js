import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts?_limit=10";

const initialState = {
   posts: [],
   status: "idle", // idle, loading, succeeded, failed
   error: null, // Очищено
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
   const response = await axios.get(POSTS_URL);
   return response.data;
});

const postsSlice = createSlice({
   name: "posts",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchPosts.pending, (state) => {
            state.status = "loading";
            state.error = null;
         })
         .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = "succeeded";
            console.log("Fetched data:", action.payload);
            state.posts = action.payload;
         })
         .addCase(fetchPosts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
         });
   },
});

export const postsSelector = (state) => state.posts.posts;
export const selectPostBytitle = (state, title) =>
   state.posts.posts.find((post) => post.title === title);

export const postsReducer = postsSlice.reducer;
