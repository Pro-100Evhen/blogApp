import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts?_limit=10";

const initialState = {
   posts: [],
   status: "idle", // idle, loading, succeeded, failed
   error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
   const response = await axios.get(POSTS_URL);
   return response.data;
});

const postsSlice = createSlice({
   name: "posts",
   initialState,
   reducers: {
      addPost(state, action) {
         state.posts = [action.payload, ...state.posts];
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchPosts.pending, (state) => {
            state.status = "loading";
            state.error = null;
         })
         .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.posts = action.payload;
         })
         .addCase(fetchPosts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
         });
   },
});

export const { addPost } = postsSlice.actions;
export const postsSelector = (state) => state.posts.posts;
export const selectPostById = (state, postId) =>
   state.posts.posts.find((post) => post.id.toString() === postId.toString());

export const getPostsByAuthorId = (state, authorId) =>
   state.posts.posts.filter(
      (post) => post.userId.toString() === authorId.toString()
   );
export const postsReducer = postsSlice.reducer;
