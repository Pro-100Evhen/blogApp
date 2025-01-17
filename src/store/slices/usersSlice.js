import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
   users: [],
   status: "idle", // loading, succeeded, failed
   erorr: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
   const response = await axios.get(USERS_URL);
   return response.data;
});

export const usersSlice = createSlice({
   name: "users",
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(fetchUsers.pending, (state) => {
            state.status = "loading";
            state.erorr = null;
         })
         .addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.status = "succeeded";
         })
         .addCase(fetchUsers.rejected, (state, action) => {
            state.erorr = action.payload;
         });
   },
});

export const usersSelector = (state) => state.users.users;
export const selectUserById = (state, userId) => {
   return state.users.users.find(
      (user) => user.id.toString() === userId.toString()
   );
};

export const usersReducer = usersSlice.reducer;
