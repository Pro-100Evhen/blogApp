import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts?_limit=10";

const initialState = {
   posts: [],
   status: "idle", // idle, loading, succeeded, faild
   errors: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
   try {
      const response = await axios.get(POSTS_URL);
      return response.data;
   } catch (error) {
      return error.message;
   }
});

const postsSlice = createSlice({
   name: "posts",
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(fetchPosts.pending, (state) => {
            state.status = "loading";
         })
         .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.posts = action.payload;
         })
         .addCase(fetchPosts.rejected, (state, action) => {
            state.errors = action.payload;
         });
   },
});

export const postsReducer = postsSlice.reducer;
